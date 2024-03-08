import All from './View/All'
import Register1 from './View/register1';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Component} from "react";
import {getResizeEventListener} from "./module/SizeRefactor";

class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div id="App">
                    <Routes>
                        <Route path="/main"  element={<All/>}/>
                        <Route path="/login" element=""/>
                        <Route path="/register" element={<Register1/>}/>

                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
    componentDidMount() {
        const FixRatio = getResizeEventListener(1980,1060);
        console.log()
        window.onresize= FixRatio;
        FixRatio();
    }
}

export default App;