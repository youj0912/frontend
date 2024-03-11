import styles from "../Css/mainPageCss/MainPageFooter.module.css";

export default function Footer(){
    return(
        <footer>
            <div className={styles.footerText}>
                <p><a href="src/component#!">헌혈의 집 찾기</a></p>
                <p><a href="src/component#!">고객센터</a></p>
                <p><a href="src/component#!">레드커넥트</a></p>
            </div>
            <p>[26465] 강원특별자치도 원주시 혁신로 50 대한적십자사 혈액관리본부</p>
            <p>COPYRIGHT(C) GIVE All rights reserved</p>
        </footer>
    );
}