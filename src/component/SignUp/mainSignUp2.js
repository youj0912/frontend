import Order2 from "./order2";
import Styles from "../Css/SignUpCss/signUp2Form.module.css";
import {Link} from "react-router-dom";
export default function mainRegister(){
    return(
        <main className={Styles.main}>
            <p>회원가입</p>
            <Order2/>
            <p className={Styles.info}>회원정보 입력</p>
            <form className={Styles.mainForm}>
                <div className={Styles.content}>
                    <div className={Styles.select}>
                        <input type={'text'} placeholder={'이름'}/>
                        <input type={'radio'} id={'male'} name={'sex'}/><label for={'male'}>남성</label>
                        <input type={'radio'} id={'female'} name={'sex'}/><label for={'female'}>여성</label>
                    </div>
                    <input className={Styles.day} type={'date'}/>
                    <input className={Styles.phoneNumber} type={`tel`} placeholder={'전화번호'}/>
                    <input className={Styles.emails} type={'email'} placeholder={'이메일'}/>
                    <button className={Styles.emailCheck} type={`submit`}>중복 검사</button>
                    <input type={'text'}/>
                    <button className={Styles.numberCheck} type={'submit'}>인증</button>
                    <input type={"password"} placeholder={'비밀번호 입력'}/>
                    <input type={"password"} placeholder={'비밀번호 재확인'}/>
                    <input className={Styles.address} type={"text"} placeholder={'주소'}/>
                    <Link to={`/signUp/finish`}><button className={Styles.registerButton} type={"submit"}>회원가입</button></Link>
                </div>
            </form>
        </main>
    )
}