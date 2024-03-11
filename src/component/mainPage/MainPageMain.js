
import Register from "../../GIVE_사진/Register.PNG"
import Search from "../../GIVE_사진/search.PNG"
import Request from "../../GIVE_사진/help-call 1.png"
import Document from "../../GIVE_사진/filling-form 1.png"
import Donation from "../../GIVE_사진/donation (1) 2.png"
import Rec1 from "../../GIVE_사진/Rectangle 374.png";
import Count1 from "../../GIVE_사진/circle/기부횟수1.png";
import Count2 from "../../GIVE_사진/circle/기부횟수2.png";
import styles from '../Css/mainPageCss/MainPageMain.module.css';
import {Link} from "react-router-dom";
export default function Main(){
    return(
        <main className={styles.main}>
            <div className={styles.mainList}>
                <p style={{fontWeight:"bold", fontSize:"25px"}}>헌혈</p>
                <div className={styles.mainListBorder}>
                     <Link to>
                        <div>
                            <img src={Register} alt="사진 오류"/>
                            <p>등록</p>
                        </div>
                    </Link>
                    <Link to>
                        <div>
                            <img src={Search} alt="사진 오류"/>
                            <p>조회</p>
                        </div>
                    </Link>
                    <Link to>
                        <div>
                            <img src={Request} alt="사진 오류"/>
                            <p>요청</p>
                        </div>
                    </Link>
                    <Link to>
                        <div>
                            <img src={Document} alt="사진 오류"/>
                            <p>전자문진</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.donation}>
            <img src={Donation} alt="사진 오류"/>
            <p style={{color:'white', fontWeight:'bold'}}>기부하러 가기</p>
            </div>
            <div className={styles.info}>
                <p style={{fontWeight:"bold", fontSize:"25px"}}>공지사항</p>
                <div className={styles.infoBorder}>
                    <div className={styles.infoTop}>
                        <div className={styles.date}>
                            <p>19</p>
                            <p>2024-01</p>
                        </div>
                        <div className={styles.infoTopText}>
                        <p>코로나19 관련 헌혈금지기간 안내</p>
                        <p>코로나19 완치 후 헌혈 참여는 10일 후 가능하며 ...
                            asdasdasdasdsadasas
                            dsadasdasdasdsasa
                            dsadasdasdsadas
                        </p>
                        </div>
                    </div>
                    <div className={styles.infoBottom}>
                        <ul>
                            <li>의료기관 수혈비용 보상금 신청 안내</li>
                            <li>울산혈액원 관내 헌혈의 집 휴무 안내</li>
                            <li>인천혈액원 관할 헌혈의 집 휴무 안내</li>
                            <li>11월 헌혈의집 운영일정 변경 안내</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.event}>
                <p style={{fontWeight:"bold", fontSize:"25px"}}>이벤트</p>
                <img src={Rec1} alt="사진 오류"/>
            </div>
            <div className={styles.allDonation}>
                <img className={styles.mainLeftCircle} src={Count1} alt="사진 오류"/>
                <p>모두가 함께한 기부 횟수</p>
                <p style={{fontWeight:"bold", fontSize:"55px", color:"var(--color_give)"}}>156개</p>
                <p>2023.11.10 기준</p>
                <img className={styles.mainRightCircle} src={Count2} alt="사진 오류"/>
            </div>
        </main>
    )
}