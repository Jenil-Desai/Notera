import {onBoardingFeatures} from "@/screens/OnBoarding/onBoardingFeatures.ts";
import {ArrowLeft, ArrowRight, BookOpen} from "lucide-react"
import {AnimatePresence, motion} from 'framer-motion'
import {load} from '@tauri-apps/plugin-store';
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {FormEvent, useEffect, useState} from 'react'
import {APP_USERDETAILS_STORE_KEY} from "@/Constants/AppConstant.ts";
import {useLocation} from "wouter";

export default function OnboardingScreen() {
    const [location, setLocation] = useLocation();
    const [currentSlide, setCurrentSlide] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        async function main() {
            const store = await load(APP_USERDETAILS_STORE_KEY, {autoSave: false});
            await store.reset();
            let firstName = await store.get('firstName');
            let lastName = await store.get('lastName');
            if (!location) console.log(location);
            if (firstName && lastName) {
                setLocation('/home');
            }
        }

        main().then();
    })

    const handleNext = () => {
        if (currentSlide < onBoardingFeatures.length) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const handlePrevious = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (firstName && lastName) {
            console.log('submit', firstName, lastName)
            const store = await load(APP_USERDETAILS_STORE_KEY, {autoSave: false});
            await store.set('firstName', firstName);
            await store.set('lastName', lastName);
            setLocation('/home');
        }
    }

    const renderSlideIcon = (index: number) => {
        const SlideIcon = onBoardingFeatures[index].icon;
        return <SlideIcon className={"h-16 w-16 text-primary"}/>;
    };

    return (
        <div
            className="h-screen w-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center p-4">
            <div className="w-full h-full bg-card shadow-2xl rounded-3xl overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -20}}
                                transition={{duration: 0.3}}
                                className="space-y-6"
                            >
                                {currentSlide < onBoardingFeatures.length ? (
                                    <>
                                        <div className="text-center md:text-left">
                                            {renderSlideIcon(currentSlide)}
                                            <h2 className="text-3xl font-bold mt-4">{onBoardingFeatures[currentSlide].title}</h2>
                                            <p className="text-muted-foreground mt-2">{onBoardingFeatures[currentSlide].description}</p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-bold text-center md:text-left">Let's Get
                                            Started!</h2>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name</Label>
                                                <Input
                                                    id="firstName"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name</Label>
                                                <Input
                                                    id="lastName"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <Button type="submit" className="w-full">
                                                Start Your Journey
                                            </Button>
                                        </form>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                        <div className="flex justify-between mt-8">
                            <Button
                                variant="outline"
                                onClick={handlePrevious}
                                disabled={currentSlide === 0}
                            >
                                <ArrowLeft className="mr-2 h-4 w-4"/> Previous
                            </Button>
                            <Button
                                onClick={handleNext}
                                disabled={currentSlide === onBoardingFeatures.length}
                            >
                                {currentSlide < onBoardingFeatures.length - 1 ? (
                                    <>Next <ArrowRight className="ml-2 h-4 w-4"/></>
                                ) : (
                                    'Finish'
                                )}
                            </Button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 1.1}}
                                transition={{duration: 0.5}}
                                className="absolute inset-0"
                            >
                                {currentSlide < onBoardingFeatures.length ? (
                                    <img
                                        src={onBoardingFeatures[currentSlide].image}
                                        alt={onBoardingFeatures[currentSlide].title}
                                        className="object-cover w-full h-full"/>
                                ) : (
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 flex items-center justify-center">
                                        <BookOpen className="h-32 w-32 text-background"/>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}