import Image from "next/image";
import styles from "./main.module.scss";
import Logo from "/public/images/logo.png";

const Main = () => {
    return <div className={styles.container}>
        <Image src={Logo}/>
    </div>;
}

export default Main