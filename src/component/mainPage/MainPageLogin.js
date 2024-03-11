import { Link } from 'react-router-dom';
import Img from '../../GIVE_사진/giveLOGO 1.png'
import styles from "../Css/mainPageCss/MainPageLogin.module.css";
import info from "../../GIVE_사진/cute_cat.jpg";
export default function Headers(){
    return(
        <header className={styles.allSize}>
            <div className={styles.allSizeItem}>
                <div className={styles.logo}><img src={Img} alt="notFound"/><Link to="/main"><p className={styles.logoName}>GIVE</p></Link></div>
                <img src={info}/>
            </div>
        </header>
    );
}