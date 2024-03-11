import { Link } from 'react-router-dom';
import Img from '../../GIVE_사진/giveLOGO 1.png'
import styles from "../Css/mainPageCss/MainPageHeader.module.css";
export default function Headers(){
    return(
        <header className={styles.allSize}>
            <div className={styles.allSizeItem}>
                <div className={styles.logo}><img src={Img} alt="notFound"/><Link to="/main"><p className={styles.logoName}>GIVE</p></Link></div>
                <div>
                    <Link to="/login">로그인</Link>
                    <Link to="/signUp">회원가입</Link>
                </div>
            </div>
        </header>
    );
}