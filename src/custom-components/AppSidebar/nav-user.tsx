import {SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar.tsx"
import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar.tsx"
import {OsType, type} from "@tauri-apps/plugin-os";
import {useEffect, useState} from "react";
import {load} from "@tauri-apps/plugin-store";
import {APP_USERDETAILS_STORE_KEY} from "@/Constants/AppConstant.ts";

export function NavUser() {
    const [osType, setOsType] = useState<OsType>("macos")
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        async function main() {
            setOsType(type() as OsType)
            const store = await load(APP_USERDETAILS_STORE_KEY, {autoSave: false});
            const fname: string = await store.get('firstName') ?? "";
            const lname: string = await store.get('lastName') ?? "";
            if (!fname || !lname) return
            setFirstName(fname)
            setLastName(lname)
        }

        main().then();
    });

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={""} alt={firstName}/>
                        <AvatarFallback className="rounded-lg">{firstName[0]}{lastName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{firstName} {lastName}</span>
                        <span className="truncate text-xs">{osType}</span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
