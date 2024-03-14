import RegisterImg from '../../GIVE_사진/RegisterImg.png'
import RegisterSide from "./RegisterSide";
import style from '../Css/RegisterCss/RegisterFile.module.css'
import {Link} from "react-router-dom";
export default function RegisterFileInput(){
    return(
        <main className={style.main}>
            <RegisterSide/>
            <img src={RegisterImg} alt={"사진이 없습니다"}/>
            <div>
                <p>헌혈증 등록</p>
                <div className={style.box}>
                    <div className={style.block}/>
                    <label className={style.inputFileButton} for={"inputFile"}>이미지 업로드</label>
                    <input type={"file"} id={"inputFile"} style={{display:"none"}}/>
                    <p>또는 파일 놓기</p>
                    <Link to={'/'}><p className={style.underText}>수동으로 입력하기</p></Link>
                </div>
            </div>
        </main>
    )
}