import emailjs from "emailjs-com";
import React from 'react';
import styles from './styles.module.css'

const FormEmail = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_wc5i59h', e.target, 'Aq7UK1dYZi08wJdOS')

            .then((result) => {
                alert("Mensagem enviada com sucesso! 👍");
            }, (error) => {
                alert(error.message)
            });
        e.target.reset()
    }
    return (
        <div className={styles.container_formemail}>
            <h2 className={styles.title_formemail}>Contate-nos e tire todas suas dúvidas!</h2>
            <form className={styles.form_control} onSubmit={sendEmail}>
                <div className={styles.section_formemail}>
                    <label className={styles.label_formemail}>Nome:</label>
                    <input className={styles.input_formemail} type="text" autoFocus required placeholder="Nome" name="name" />
                </div>
                <div className={styles.section_formemail}>
                    <label className={styles.label_formemail}>Email:</label>
                    <input className={styles.input_formemail} type="email" required placeholder="Seu e-mail" name="email" />
                </div>
                <div className={styles.section_formemail}>
                    <label className={styles.label_formemail}>Telefone (whatsapp):</label>
                    <input className={styles.input_formemail} type="phone" required placeholder="Seu telefone" name="phone" />
                </div>
                <div className={styles.section_formemail}>
                    <label className={styles.label_formemail}>Assunto:</label>
                    <input className={styles.input_formemail} type="text" autoFocus required placeholder="Sua dúvida é..." name="subject" />
                </div>
                <div className={styles.section_formemail}>
                    <label className={styles.label_formemail}>Mensagem:</label>
                    <textarea className={styles.input_formemail} id="" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
                </div>
                <div>
                    <input className={styles.button_formemail} type="submit" value="Enviar mensagem"></input>
                </div>
            </form>
        </div>
    )
}

export default FormEmail