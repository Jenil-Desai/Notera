import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <SidebarProvider>
            <App/>
        </SidebarProvider>
    </React.StrictMode>,
);
