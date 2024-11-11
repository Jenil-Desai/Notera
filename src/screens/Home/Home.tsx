import {ArrowRight, Brain, Lightbulb, Rocket} from "lucide-react"
import {Button} from "@/components/ui/button.tsx"
import {Card} from "@/components/ui/card.tsx"
import {motion} from 'framer-motion'


import {AppBreadcrums} from "@/custom-components/AppBreadcrums/AppBreadcrums.tsx";
import {APP_LOGO, APP_NAME, APP_TAG_LINE} from "@/Constants/AppConstant.ts";
import {homeBreadCrums} from "@/screens/Home/homeBreadCrums.ts";

export default function HomePage() {

    const features = [
        {
            icon: <Brain className="h-8 w-8"/>,
            title: "Capture Every Thought",
            description: "Never let a brilliant idea slip away. Jot down your thoughts anytime, anywhere.",
        },
        {
            icon: <Lightbulb className="h-8 w-8"/>,
            title: "Spark Your Creativity",
            description: "Organize and connect your ideas to ignite innovation and inspiration.",
        },
        {
            icon: <Rocket className="h-8 w-8"/>,
            title: "Elevate Your Productivity",
            description: "Transform your notes into action. Boost your efficiency and achieve your goals.",
        },
    ]

    return (
        <div className={"flex flex-col h-screen w-screen"}>
            <AppBreadcrums items={homeBreadCrums}/>
            <div className="flex-1 bg-background text-foreground p-4 flex justify-center items-center">
                <div className="p-8 space-y-8">
                    <header className="text-center">
                        <motion.div
                            className="inline-block"
                            animate={{rotate: [0, 5, -5, 0]}}
                            transition={{duration: 0.5, repeat: Infinity, repeatDelay: 5}}
                        >
                            <img src={APP_LOGO} alt={APP_NAME}
                                 className="h-16 w-16 mx-auto rounded-lg"/>
                        </motion.div>
                        <h1 className="text-4xl font-bold text-company-primary mt-4">{APP_NAME}</h1>
                        <p className="text-xl text-muted-foreground mt-2">{APP_TAG_LINE}</p>
                    </header>

                    <main className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold mb-4 text-company-primary">Welcome to Your Idea
                                Sanctuary</h2>
                            <p className="text-lg text-muted-foreground">
                                Discover the power of organized thoughts and unleash your creativity with NoteNova.
                            </p>
                        </div>

                        <div className="relative h-[400px] flex items-center justify-around gap-4">
                            {features.map((feature, idx) => (
                                <Card
                                    className="p-6 h-80 w-100 flex flex-col justify-center text-center items-center space-y-4 shadow-lg"
                                    key={idx}>
                                    <span className={"flex justify-center items-center"}>{feature.icon}</span>
                                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </Card>
                            ))}


                        </div>

                        <div className="text-center">
                            <Button size="lg"
                                    className="text-lg group bg-company-primary">
                                Start Your Journey
                                <ArrowRight
                                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                            </Button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}