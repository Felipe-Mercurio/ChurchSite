import Header from "Projetos Next Js/ChurchSite/components/header"
import Main from "Projetos Next Js/ChurchSite/components/components/main"
import styles from "Projetos Next Js/ChurchSite/pages/Home.module.scss"
import "/Projetos Next Js/ChurchSite/styles/globais.scss"

function Home(){
    return <div className={styles.container}>
        <Header/>
        <Main/>
    </div>
}

export default Home