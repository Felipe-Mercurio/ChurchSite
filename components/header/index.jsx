import Image from "next/image";
import Logo from "/public/images/logowhiteversion.png";
import Styles from "./header.module.scss";
import { FaBars } from 'react-icons/fa'
import React, { useState } from 'react'


const Header = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return <div className={Styles.container}>

        <div className={Styles.baricon}>
            <FaBars onClick={showSiderbar} />
            {sidebar && <Sidebar active={setSidebar} />}
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