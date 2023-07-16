import Styles from "./footer.module.scss";
{/* 
import { SiWhatsapp } from 'react-icons/Si';
import { SiInstagram } from 'react-icons/Si';
import { SiYoutube } from 'react-icons/Si';
import { SiFacebook } from 'react-icons/Si';
*/}



const Footer = () => {
    return <div className={Styles.container}>
        <div className={Styles.devby}>
            Developed by Felipe Mercurio
        </div>

        <div className={Styles.social}>
            
            {/* 
            <SiInstagram className={Styles.icons}/>
            <SiWhatsapp className={Styles.icons}/>
            <SiYoutube className={Styles.icons}/>
            <SiFacebook className={Styles.icons}/>
            */}
        </div>
    </div>

}

export default Footer