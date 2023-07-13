import Image from "next/image";
import Logo from "/public/images/logo.png";
import Styles from "./main.module.scss";

const Main = () => {
    return <div className={Styles.container}>
        <div >
            <Image src={Logo}/>
        </div>
    </div>;
}

export default Main