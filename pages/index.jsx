import Header from "../components/header"
import Main from "../components/main"
import styles from "./Home.module.scss"
import "/Projetos Next Js/ChurchSite/styles/globais.scss"

function Home(){
    return <div className={styles.container}>
        <Header/>
        <Main/>
    </div>
}

export default Home