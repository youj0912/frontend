import Order2 from "./order2";
import Styles from "../Css/SignUpCss/signUp2Form.module.css";
import {Link} from "react-router-dom";
import React from 'react';
class mainSignUp2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            email:false,
            password:false,
        }
        this.checkEmail = this.checkEmail.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    checkEmail(e, url){
        e.preventDefault();
        const data = {
            id : this.state.id
        }

        fetch(url,{
            method:"post",
            headers:{'Content-Type': "application/json"},
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(json => {
                console.log("success");
                if(json.tf === true){
                    alert('사용가능한 email 입니다.');
                    this.setState({
                        email: true
                    })
                }else{
                    alert("다른 ID를 입력해주세요");
                }
            });
    }
    render(){
        return(
            <main className={Styles.main}>
                <p>회원가입</p>
                <Order2/>
                <p className={Styles.info}>회원정보 입력</p>
                <form className={Styles.mainForm}>
                    <div className={Styles.content}>
                        <div className={Styles.select}>
                            <input type={'text'} name={"name"} placeholder={'이름'}/>
                            <input type={'radio'} id={'male'} name={'gender'} value={"남"}/><label for={'male'}>남성</label>
                            <input type={'radio'} id={'female'} name={'gender'} value={"여"}/><label for={'female'}>여성</label>
                        </div>
                        <input className={Styles.day} name={'birth'} type={'date'}/>
                        <input className={Styles.phoneNumber} name={'phone'} type={`tel`} placeholder={'전화번호'}/>
                        <div className={Styles.bloodType}>
                            <p>혈액형</p>
                            <input type={'radio'} id={'A'} name={'blood'}/><label for={'A'}>A</label>
                            <input type={'radio'} id={'B'} name={'blood'}/><label For={'B'}>B</label>
                            <input type={'radio'} id={'O'} name={'blood'}/><label For={'O'}>O</label>
                            <input type={'radio'} id={'AB'} name={'blood'}/><label For={'AB'}>AB</label>
                        </div>
                        <input className={Styles.emails} type={'email'} placeholder={'이메일'} name={'email'} onChange={this.onChange}/>
                        <button className={Styles.emailCheck} type={`submit`} onClick={this.checkEmail}>요청 하기</button>
                        <input type={'text'} placeholder={'인증번호'}/>
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
}


export default mainSignUp2