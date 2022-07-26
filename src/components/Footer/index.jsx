import styles from './styles.module.css'
import logo from './assets/logo.svg'

const Footer = () => {
    return (
        <footer className={styles.container_footer}>
            <img className={styles.logo_footer} src={logo} alt="" />
            <section className={styles.section_footer}>
                <p className={styles.description_footer}>
                    .boxx Software House &copy; 2022
                </p>
                <p className={styles.description_footer}>
                    CNPJ: 47.247.962/0001-03
                </p>
                <p className={styles.description_footer}>
                    Joinville, SC - 89209-225
                </p>
                <p className={styles.description_footer}>
                    vitosandrin@boxxsoftwarehouse.com
                </p>
            </section>
        </footer>
    )
}

export default Footer;