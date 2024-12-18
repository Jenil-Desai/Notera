import {Folder, MoreHorizontal, Trash2,} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar.tsx"
import { BaseDirectory, remove } from "@tauri-apps/plugin-fs"


export function NavCategories({categories}: { categories: string[] }) {
    const {isMobile} = useSidebar()

    async function handleCategoryDeletion(categoryName: string) {
        await remove("Desktop/" + categoryName, {baseDir: BaseDirectory.Desktop, recursive: true})
    }

    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Categories</SidebarGroupLabel>
            <SidebarMenu>
                {categories.map((item, idx) => (
                    <SidebarMenuItem key={idx}>
                        <SidebarMenuButton asChild>
                            <a href={`/category/${item}`}>
                                <span>{item}</span>
                            </a>
                        </SidebarMenuButton>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuAction showOnHover>
                                    <MoreHorizontal/>
                                    <span className="sr-only">More</span>
                                </SidebarMenuAction>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-48 rounded-lg"
                                side={isMobile ? "bottom" : "right"}
                                align={isMobile ? "end" : "start"}
                            >
                                <DropdownMenuItem>
                                    <a href={`/category/${item}`} className="flex justify-between items-center">
                                        <Folder className="text-muted-foreground"/>
                                        <span>View Category</span>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem onClick={async() => await handleCategoryDeletion(item)}>
                                    <Trash2 className="text-muted-foreground"/>
                                    <span>Delete Category</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
