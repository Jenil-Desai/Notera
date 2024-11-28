import {Route, Switch} from "wouter";

import NoteTakingScreen from "@/screens/NoteCreationScreen/NoteCreationScreen.tsx";
import OnboardingScreen from "@/screens/OnBoarding/OnBoardingScreen.tsx";
import {CategoryPage} from "@/screens/Category/Category.tsx";
import HomePage from "@/screens/Home/Home.tsx";
import {Layout} from "@/layout.tsx";
import NoteUpdatingScreen from "./screens/NoteUpdateScreen/NoteUpdateScreen";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={"/"} component={OnboardingScreen}/>
                <Route path={"/home"} component={HomePage}/>
                <Route path={"/new-note"} component={NoteTakingScreen}/>
                <Route path={"/category/:category"} component={CategoryPage}/>
                <Route path={"/note/:category/:noteName"} component={NoteUpdatingScreen}/>
                <Route>404</Route>
            </Switch>
        </Layout>
    )
}

export default App;
