import MainPage from './View/mainPageLogin'
import Register1 from './View/signUp1';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Component} from "react";
import {getResizeEventListener} from "./module/SizeRefactor";
import Register2 from './View/signUp2';
import Register3 from './View/signUp3';
class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div id="App">
                    <Routes>
                        <Route path="/main"  element={<MainPage/>}/>
                        <Route path="/login" element=""/>
                        <Route path="/signUp" element={<Register1/>}/>
                        <Route path="/signUp/form" element={<Register2/>}/>
                        <Route path="/signUp/finish" element={<Register3/>}/>

                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
    componentDidMount() {
        const FixRatio = getResizeEventListener(1980,1060);
        window.onresize= FixRatio;
        FixRatio();
    }
}

export default App;