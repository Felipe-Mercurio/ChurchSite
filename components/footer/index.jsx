import Styles from "./footer.module.scss";
import { SiWhatsapp } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiYoutube } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';

const Footer = () => {

    return <div className={Styles.container}>
        <div className={Styles.devby}>
            Developed by Felipe Mercurio
        </div>
    
        <div className={Styles.social}>
            <a href={'https://www.instagram.com/comu.evangelicavpta/'}><SiInstagram className={`${Styles.iconI} ${Styles.icon}`}/></a>
            <a><SiWhatsapp className={`${Styles.iconW} ${Styles.icon}`}/></a>
            <a href={'https://www.youtube.com/@comunidadeevangelicavarzea3709'}><SiYoutube className={`${Styles.iconY} ${Styles.icon}`}/></a>
            <a href={'https://www.facebook.com/comu.evangelicavpta'}><SiFacebook className={`${Styles.iconF} ${Styles.icon}`}/></a>
        </div>

    </div>

}

export default Footer