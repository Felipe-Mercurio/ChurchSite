import Header from "../components/header"
import styles from "./Home.module.scss"

function Home(){
    return <div className={styles.container}>
        <Header/>
    </div>
}

export default Home