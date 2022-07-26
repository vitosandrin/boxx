import emailjs from "emailjs-com";
import React from 'react';
import styles from './styles.module.css'
import whatsapp from '../../assets/icons/whatsapp.svg'

const FormEmail = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_wc5i59h', e.target, 'Aq7UK1dYZi08wJdOS')

            .then((result) => {
                alert("Mensagem enviada com sucesso! 👍");
            }, (error) => {
                alert("Houve um problema em nosso servidor. Tente novamente!")
            });
        e.target.reset()
    }

    return (
        <div className={styles.container_formemail}>
            <h2 className={styles.title_formemail}>Contate-nos!</h2>
            <form className={styles.form_control} onSubmit={sendEmail}>
                <div className={styles.section_formemail}>
                    <input className={styles.input_formemail} type="text" required placeholder="Seu nome" name="name" />
                    <input className={styles.input_formemail} type="email" required placeholder="Seu e-mail" name="email" />
                </div>
                <div className={styles.section_formemail}>
                    <input className={styles.input_formemail} type="tel" required placeholder="Seu telefone" name="phone" />

                    <div>
                        <input
                            type="checkbox"
                            name="subject"
                            value="Desenvolvimento"
                        />
                        Desenvolvimento
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="subject"
                            value="Design"
                        />
                        Design
                    </div>
                    
                </div>
                <textarea className={styles.input_formtext} id="" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
                <input className={styles.button_formemail} type="submit" value="Enviar mensagem"></input>
            </form>
            <p className={styles.title_formemail}>Ou entre em contato via: </p>
            <a className={styles.link_contact} href="https://contate.me/.boxx" target="_blank" rel="noreferrer">
                <img src={whatsapp} alt="" />
            </a>
        </div>
    )
}

export default FormEmail