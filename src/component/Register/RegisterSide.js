import leftCircle from '../../GIVE_사진/circle/레드박스1_2.png'
import rightCircle from '../../GIVE_사진/circle/레드박스2_2.png'
import styles from '../Css/RegisterCss/RegisterSide.module.css'
export default function RegisterSide(){
    return(
        <div className={styles.Img}>
            <img src={leftCircle} alt={"사진이 없습니다"}/>
            <img src={rightCircle} alt={"사진이 없습니다"}/>
        </div>
    )
}