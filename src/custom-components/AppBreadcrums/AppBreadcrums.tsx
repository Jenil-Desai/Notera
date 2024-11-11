import {SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";

interface AppBreadcrumsProps {
    name: string
    url: string
}

export function AppBreadcrums({items}: { items: AppBreadcrumsProps[] }) {
    return <header
        className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1"/>
            <Separator orientation="vertical" className="mr-2 h-4"/>
            <Breadcrumb>
                <BreadcrumbList>
                    {items.map((item, index) => (
                        <>
                            <BreadcrumbItem className="hidden md:block" key={index}>
                                <BreadcrumbLink href={item.url}>{item.name}</BreadcrumbLink>
                            </BreadcrumbItem>
                            {items.length - 1 == index ? null : <BreadcrumbSeparator className="hidden md:block"/>}
                        </>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    </header>
}