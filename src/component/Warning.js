import './Css/eventCss/AlertCss.css'
import {Component} from "react";

class Warning extends Component{
    render(){
        const {message, visible} = this.props;
        if(!visible) return null;
        return(
            <div className="Warning-wrapper">
                <div className={`Warning ${visible?'bounceOut':'bounceIn'} animated`}>
                    {message}
                </div>
            </div>
        )
    }
}
export default Warning;