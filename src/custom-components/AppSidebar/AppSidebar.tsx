import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail} from "@/components/ui/sidebar.tsx"
import {ComponentProps, useEffect, useState} from "react";
import {getCategories} from "@/utils/getCategories.ts";
import {NavUser} from "@/custom-components/AppSidebar/nav-user.tsx";

import {NavCategories} from "@/custom-components/AppSidebar/nav-categories.tsx";
import {APP_NAME, APP_TAG_LINE} from "@/Constants/AppConstant.ts";
import {SIDEBAR_LOGO} from "@/Constants/AppSidebarConstant.ts";

export function AppSidebar({...props}: ComponentProps<typeof Sidebar>) {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        async function main() {
            const allCategories: string[] = await getCategories();
            setCategories(allCategories);
        }

        main().then();
    }, [])

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <div className="flex items-center justify-between gap-2">
                    <div
                        className="flex aspect-square size-8 items-center justify-center text-sidebar-primary-foreground">
                        <img src={SIDEBAR_LOGO} alt={APP_NAME}
                             className="size-8 rounded-lg aspect-square"/>
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{APP_NAME}</span>
                        <span className="truncate text-xs">{APP_TAG_LINE}</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <NavCategories categories={categories}/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
