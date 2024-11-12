import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {FileInfo} from "@tauri-apps/plugin-fs";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "wouter";
import dayjs from "dayjs";

import {AppBreadcrums} from "@/custom-components/AppBreadcrums/AppBreadcrums.tsx";
import {getCategoryAndNotesDetails} from "@/utils/getCategoryAndNotesDetails.ts";
import {categoryBreadcrums} from "@/screens/Category/CategoryBreadcrums.ts";
import {PlusCircle} from "lucide-react";

export function CategoryPage() {
    const [categoryData, setCategoryData] = useState<{ name: string; info: FileInfo }[] | undefined>([])
    const [location, setLocation] = useLocation();
    const params = useParams();

    if (!location) console.log(location)
    useEffect(() => {
        async function main() {
            const catryData = await getCategoryAndNotesDetails({categoryName: params.category ?? ""})
            if (!catryData) {
                return;
            }
            setCategoryData(catryData);
        }

        main().then();
    })

    if (!categoryData) {
        return <div>Loading...</div>
    }

    return (
        <div className={"flex flex-col h-screen w-screen"}>
            <AppBreadcrums items={categoryBreadcrums}/>
            <main className={"flex-1 p-4"}>
                <h1 className="text-3xl font-bold mb-6">{params.category} Notes</h1>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col rounded-lg p-0 items-center justify-center cursor-pointer"
                          onClick={() => {
                              setLocation("/new-note")
                          }}>
                        <CardContent
                            className={"flex flex-col justify-center items-center h-full space-y-2.5 rounded-lg p-0 w-full"}>
                            <PlusCircle className="h-8 w-8 opacity-50"/>
                            <p className={"h-8 flex items-center"}>New Note</p>
                        </CardContent>
                    </Card>
                    {categoryData.map((note, idx) => (
                        <Card key={idx} className="flex flex-col rounded-lg">
                            <CardHeader>
                                <CardTitle>{note.name}</CardTitle>
                            </CardHeader>
                            <CardFooter className="flex justify-between">
                                <p className={"text-muted-foreground"}>{dayjs(note.info.birthtime).format("DD MMM YYYY").toString()}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}