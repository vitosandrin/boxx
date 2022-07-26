import React from 'react'
import styles from './styles.module.css'
import whatsapp from '../../assets/icons/whatsapp.svg'

const ContactButton = () => {
    return (
        <a className={styles.link_whatsapp} href="https://contate.me/.boxx" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt={whatsapp} />
        </a>
    )
}

export default ContactButton