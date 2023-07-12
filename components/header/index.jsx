import Image from "next/image";
import Logo from "/public/images/logo.png";
import "/Projetos Next Js/ChurchSite/components/header/header.scss"


const Header = () => {
    return <div className="containerheader">
        <div className="logotipo">
            <Image src={Logo}/>
        </div>
        <div className="menu">
            <button>Sobre nós</button>
            <button>Cultos</button>
            <button>Eventos</button>
            <button>Horários</button>
        </div>
        <div className="theme">

        </div>
        <div className="action">
            <button>Fale Conosco</button>
        </div>

    </div>;
}

export default Header