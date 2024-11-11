import {Route, Switch} from "wouter";

import HomePage from "@/screens/Home/Home.tsx";
import {CategoryPage} from "@/screens/Category/Category.tsx";
import OnboardingScreen from "@/screens/OnBoarding/OnBoardingScreen.tsx";
import {Layout} from "@/layout.tsx";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={"/home"} component={HomePage}/>
                <Route path={"/category/:category"} component={CategoryPage}/>
                <Route path={"/"} component={OnboardingScreen}/>
                <Route>404</Route>
            </Switch>
        </Layout>
    )
}

export default App;
