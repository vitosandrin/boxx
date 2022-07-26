import styles from './styles.module.css'

//Assets
import document from '../../assets/document.svg'

const AboutSection = () => {
    return (
        <section className={styles.container_about}>
            <h2>O que esperar da .boxx?</h2>
            <div className={styles.container_aboutinfo}>
                <div className={styles.box_aboutinfo}>
                    <img src={document} alt="" />
                    <h3 className={styles.title_aboutinfo}>Briefing</h3>
                    <p className={styles.description_aboutinfo}>Briefing</p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection