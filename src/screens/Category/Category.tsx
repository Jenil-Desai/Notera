import {useParams} from "wouter";

import {AppBreadcrums} from "@/custom-components/AppBreadcrums/AppBreadcrums.tsx";
import {categoryBreadcrums} from "@/screens/Category/CategoryBreadcrums.ts";

export function CategoryPage() {
    const params = useParams();
    return (
        <div className={"flex flex-col h-screen w-screen"}>
            <AppBreadcrums items={categoryBreadcrums}/>
            <main className={"flex-1 p-4"}>{params.category}</main>
        </div>
    )
}