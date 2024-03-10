import styles from '../Css/Register1Main.module.css';
import Order1 from './order1'
import { useState} from "react";
import {Link} from "react-router-dom";
export default function MainRegister1(){
    const [OK, setOK] = useState(false);
    const YesCheck = ()=>{
        if(!OK){
            setOK(!OK);
        }
    }

    const NoCheck = () =>{
        if(OK){
            setOK(!OK);
        }
    }
    return(
        <main className={styles.main}>
            <p>회원가입</p>
            <Order1/>
            <p className={styles.infoIntro}>개인정보 수집 및 이용에 대한 안내</p>
            <div className={styles.infoIntroBox}>
                <div className={styles.infoText}>
                아리아 도담도담 아련 소록소록 늘품 여우비 안녕 안녕 아리아 그루잠 가온누리 안녕 예그리나 노트북 곰다시 도서 책방 별빛 그루잠 별빛 가온누리 함초롱하다 아련 도서관 소록소록 노트북 미쁘다 로운 여우별 아리아 늘품 바람꽃 미쁘다 바람꽃 감사합니다 가온누리 바람꽃 책방 로운 도서관 우리는 나래 도르레 사과 여우비 아름드리 가온누리 곰다시 책방 곰다시.

도르레 우리는 아리아 달볓 다솜 별빛 사과 포도 이플 아슬라 감사합니다 안녕 비나리 나래 도르레 소솜 소솜 여우비 비나리 도르레 바람꽃 산들림 예그리나 우리는 책방 나래 옅구름 미쁘다 도르레 아름드리 이플 미리내 책방 사과 달볓 비나리 우리는 아리아 곰다시 아련 아리아 도르레 컴퓨터 미쁘다 미쁘다 도담도담 여우비 옅구름 소록소록 산들림.

가온해 산들림 곰다시 도서관 옅구름 미리내 감사합니다 늘품 가온해 곰다시 비나리 미쁘다 우리는 책방 아슬라 도담도담 소록소록 책방 옅구름 사과 안녕 가온누리 여우비 안녕 함초롱하다 미리내 달볓 아리아 바람꽃 나래 아련 컴퓨터 감또개 소솜 미리내 컴퓨터 안녕 노트북 책방 감또개 바람꽃 도서 안녕 그루잠 여우비 이플 달볓 우리는 도담도담 달볓.

바나나 도서관 곰다시 도르레 로운 그루잠 포도 컴퓨터 달볓 도담도담 도서 노트북 그루잠 소솜 예그리나 책방 바나나 미리내 여우비 감또개 여우비 노트북 미리내 다솜 옅구름 별빛 다솜 사과 아름드리 가온누리 별빛 달볓 노트북 도르레 늘품 아름드리 우리는 다솜 바람꽃 함초롱하다 예그리나 아슬라 책방 이플 노트북 바나나 소록소록 가온누리 바나나 비나리.

나비잠 아름드리 로운 달볓 나비잠 감사합니다 도르레 소록소록 감또개 가온누리 책방 여우별 안녕 아련 아리아 여우별 미리내 미쁘다 책방 사과 이플 우리는 가온해 이플 노트북 예그리나 안녕 우리는 감또개 도담도담 도르레 별하 아슬라 다솜 여우비 도서관 별하 우리는 아름드리 미쁘다 우리는 노트북 나비잠 아름드리 별하 별빛 우리는 가온누리 여우비 컴퓨터.

컴퓨터 아리아 옅구름 미쁘다 나비잠 나비잠 우리는 안녕 노트북 컴퓨터 가온해 달볓 옅구름 책방 예그리나 사과 달볓 달볓 바람꽃 도서관 사과 별빛 여우별 예그리나 옅구름 늘품 여우비 노트북 옅구름 미쁘다 별하 미리내 아슬라 아리아 미쁘다 아름드리 산들림 아름드리 포도 도서 아름드리 안녕 컴퓨터 바나나 아름드리 감또개 아름드리 가온해 별하 늘품.

이플 나비잠 도서 노트북 비나리 여우별 함초롱하다 도르레 도르레 아름드리 이플 사과 노트북 감사합니다 나비잠 소솜 미리내 로운 사과 사과 아슬라 소솜 로운 가온해 옅구름 나비잠 여우별 별빛 함초롱하다 아름드리 소록소록 가온해 가온해 미쁘다 늘품 아리아 도서관 포도 도담도담 소록소록 가온누리 도서 여우별 함초롱하다 도서관 노트북 예그리나 미쁘다 옅구름 컴퓨터.

이플 옅구름 가온해 아슬라 여우비 컴퓨터 사과 늘품 아리아 아름드리 여우비 소록소록 나래 감사합니다 바람꽃 비나리 미리내 별빛 가온해 여우별 안녕 나래 미쁘다 아련 비나리 소솜 소록소록 도서관 감또개 가온해 여우별 가온누리 늘품 곰다시 미리내 컴퓨터 늘품 감또개 미리내 도서 별하 소록소록 소록소록 별빛 별하 여우별 이플 옅구름 사과 노트북.

노트북 나래 가온해 가온해 우리는 도르레 예그리나 여우별 나래 나래 안녕 별빛 함초롱하다 소솜 이플 별빛 포도 곰다시 이플 미쁘다 컴퓨터 소록소록 소솜 나비잠 가온누리 이플 산들림 가온해 비나리 노트북 그루잠 감사합니다 나래 가온해 노트북 다솜 함초롱하다 아련 여우비 사과 바람꽃 안녕 별하 이플 아련 컴퓨터 함초롱하다 함초롱하다 나비잠 바람꽃.

예그리나 감또개 함초롱하다 책방 그루잠 우리는 포도 여우비 도담도담 도서관 소솜 산들림 달볓 함초롱하다 도서 감또개 예그리나 옅구름 바나나 도르레 안녕 컴퓨터 도담도담 여우비 미쁘다 다솜 여우비 아련 우리는 여우비 곰다시 이플 감또개 책방 안녕 우리는 늘품 늘품 로운 책방 도서관 여우비 소솜 바나나 옅구름 이플 옅구름 가온해 감또개 미쁘다.
                </div>
                <br></br>
                <input type='radio' name="checking" value="yes" id="y" onClick={YesCheck}/><span><label for="y">동의합니다</label></span>
                <input className={styles.disagree} type='radio' name="checking" value="no" id="n" onClick={NoCheck}/><span><label for="n">동의하지 않습니다</label></span>
            </div>
            <button {...(OK ? {disabled:false} : {disabled:true})} className={styles.submit} ><Link to={"/register/form"}>회원가입 진행하기</Link></button>
        </main>
    )
}