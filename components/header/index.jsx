import Image from "next/image";
import Logo from "/public/images/LOGO-IGREJA.jpg";

const Header = () => {
    return <div className="container">
        <div className="logotipo">
            <Image src={Logo} />
        </div>
        <div className="menu">

        </div>
        <div className="action">

        </div>
    </div>;
}

export default Header