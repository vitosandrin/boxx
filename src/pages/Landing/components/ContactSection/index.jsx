import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.css'

import logo from '../../../../assets/icons/logo.svg'
import instagram from '../../../../assets/icons/instagram.svg'
import facebook from '../../../../assets/icons/facebook.svg'

const ContactSection = () => {
    return (
        <>
        <h6 className={styles.title}>Siga-nos em nossas redes sociais:</h6>
            <section className={styles.container}>
                <Link to={"/"}>
                    <img src={logo} className={styles.logo} alt={logo} />
                </Link>
                <a href='https://www.facebook.com/boxxsoftwarehouse' target="_blank" rel="noreferrer">
                    <img src={instagram} className={styles.logo} alt={facebook} />
                </a>
                <a href="https://www.instagram.com/boxxsoftwarehouse/" target="_blank" rel="noreferrer">
                    <img src={facebook} className={styles.logo} alt={instagram} />
                </a>
            </section>
        </>

    )
}

export default ContactSection