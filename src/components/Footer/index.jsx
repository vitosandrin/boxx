import styles from './styles.module.css'
import logo from './assets/logo.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'

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
            <div className={styles.footer_links}>
                <a href="https://www.instagram.com/boxxsoftwarehouse/" target="_blank" rel="noreferrer">
                    <img className={styles.icon_footer} src={instagram} alt={instagram} />
                </a>
                <a href="https://www.instagram.com/boxxsolutions/" target="_blank" rel="noreferrer">
                    <img className={styles.icon_footer} src={facebook} alt={facebook} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;