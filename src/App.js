import MainPage from './View/mainPage'
import SignUp1 from './View/signUp1';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Component} from "react";
import {getResizeEventListener} from "./module/SizeRefactor";
import SignUp2 from './View/signUp2';
import SignUp3 from './View/signUp3';
import Login from './View/login'
import RegisterMain from './View/register'
class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div id="App" style={{position:"relative"}}>
                    <Routes>
                        <Route path="/main"  element={<MainPage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signUp" element={<SignUp1/>}/>
                        <Route path="/signUp/form" element={<SignUp2/>}/>
                        <Route path="/signUp/finish" element={<SignUp3/>}/>
                        <Route path="/register" element={<RegisterMain/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
    componentDidMount() {
        const FixRatio = getResizeEventListener(1980,1060);
        FixRatio();
        window.onresize= FixRatio;
    }
}

export default App;