import Order2 from "./order2";
import Styles from "../Css/RegisterForm.module.css";
export default function mainRegister(){
    return(
        <main className={Styles.main}>
            <p>회원가입</p>
            <Order2/>

        </main>
    )
}