import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"
import styles from "./Home.module.scss"

function Home(){
    return <div className={styles.container}>
        <Header/>
        <Main/>
        <Footer/>
    </div>
}

export default Home