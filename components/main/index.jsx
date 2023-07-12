import Image from "next/image";
import Logo from "/public/images/logo.png";
import "/Projetos Next Js/ChurchSite/components/main/main.scss"

const Main = () => {
    return <div className="containermain">
        <div >
            <Image src={Logo}/>
        </div>
    </div>;
}

export default Main