import {useLocation} from "wouter";
import {AppSidebar} from "@/custom-components/AppSidebar/AppSidebar.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";

export function Layout({children}: { children: JSX.Element }) {
    const [location] = useLocation();
    const excludedRoutes = ['/'];
    const shouldRenderSidebar = !excludedRoutes.includes(location);

    return (
        <>
            {shouldRenderSidebar && <AppSidebar/>}
            {children}
            <Toaster/>
        </>
    )
}