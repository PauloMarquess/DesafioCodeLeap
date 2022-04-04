
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/SignUp'
import MainScreen from "./pages/MainScreen";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/main-screen" component={MainScreen}/>
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;