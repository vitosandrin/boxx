import styles from './styles.module.css'

//Assets
import document from '../../assets/document.svg'
import talk from '../../assets/talk.svg'
import contract from '../../assets/contract.svg'
import selected from '../../assets/selected.svg'
import sprint from '../../assets/sprint.svg'
import finished from '../../assets/finished.svg'

const AboutSection = () => {
    return (
        <section className={styles.container_about}>
            <h2>O que esperar da .boxx?</h2>
            <div className={styles.container_aboutinfo}>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={document} alt="" />
                    <h3 className={styles.title_aboutinfo}>Briefing</h3>
                    <p className={styles.description_aboutinfo}>Briefing</p>
                </div>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={talk} alt="" />
                    <h3 className={styles.title_aboutinfo}>Talk</h3>
                    <p className={styles.description_aboutinfo}>Talk</p>
                </div>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={selected} alt="" />
                    <h3 className={styles.title_aboutinfo}>Selected</h3>
                    <p className={styles.description_aboutinfo}>Selected</p>
                </div>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={contract} alt="" />
                    <h3 className={styles.title_aboutinfo}>Contract</h3>
                    <p className={styles.description_aboutinfo}>Contract</p>
                </div>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={sprint} alt="" />
                    <h3 className={styles.title_aboutinfo}>Sprint</h3>
                    <p className={styles.description_aboutinfo}>Sprint</p>
                </div>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={finished} alt="" />
                    <h3 className={styles.title_aboutinfo}>Finished</h3>
                    <p className={styles.description_aboutinfo}>Finished</p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection