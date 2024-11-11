import {Route, Switch} from "wouter";

import {AppSidebar} from "@/custom-components/AppSidebar/AppSidebar.tsx";
import HomePage from "@/screens/Home/Home.tsx";
import {CategoryPage} from "@/screens/Category/Category.tsx";

function App() {
    return <>
        <AppSidebar/>
        <Switch>
            <Route path={"/"} component={HomePage}/>
            <Route path={"/category/:category"} component={CategoryPage}/>
            <Route>404</Route>
        </Switch>
    </>
}

export default App;
