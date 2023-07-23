import Image from "next/image";
import Logo from "/public/images/logowhiteversion.png";
import Styles from "./header.module.scss";
import { SlMenu } from 'react-icons/sl';

const Header = () => {

     return <div className={Styles.container}>
        
        <div className={Styles.smenu}>
            <SlMenu/>
        </div>

        <div className={Styles.logotipo}>
            <Image src={Logo}/>
        </div>

        <div className={Styles.menu}>
            <button>Sobre nós</button>
            <button>Cultos</button>
            <button>Eventos</button>
            <button>Horários</button>
        </div>
        <div className={Styles.theme}>
        </div>
        <div className={Styles.action}>
            <button>Fale Conosco</button>

        </div>

    </div>;
}

export default Header