import emailjs from "emailjs-com";
import React, { useState } from 'react';
import styles from './styles.module.css'
import whatsapp from '../../assets/icons/whatsapp.svg'
import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'

const FormBudget = () => {

    const [show, setShow] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_iyexlks', e.target, 'Aq7UK1dYZi08wJdOS')

            .then((result) => {
                alert("Mensagem enviada com sucesso! 👍");
            }, (error) => {
                alert("Houve um problema em nosso servidor. Tente novamente!")
            });
        e.target.reset()
    }

    return (
        <>
            <div className={styles.box_container}>
                <p className={styles.box_title}>Faça um orçamento sem compromisso!</p>
                <img className={styles.box_image} onClick={() => show ? setShow(false) : setShow(true)} src={show ? minus : plus} alt="" />
            </div>
            {show && (
                <div className={styles.container_form}>
                    <h2 className={styles.title_form}>Formulário de orçamento:</h2>
                    <form className={styles.form_control} onSubmit={sendEmail}>
                        <div className={styles.section_form}>
                            <input className={styles.input_form} type="text" required placeholder="Seu nome" name="name" />
                            <input className={styles.input_form} type="email" required placeholder="Seu e-mail" name="email" />
                        </div>
                        <div className={styles.section_form}>
                            <input className={styles.input_form} type="tel" required placeholder="Seu telefone" name="phone" />

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="subject"
                                    value="Desenvolvimento"
                                />
                                Desenvolvimento
                            </div>

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="subject"
                                    value="Design"
                                />
                                Design
                            </div>

                        </div>

                        <h6 className={styles.title_form}>Quais soluções são de seu interesse?</h6>

                        <div className={styles.section_form}>

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="service"
                                    value="Landing Page"
                                />
                                Landing Page
                            </div>

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="service"
                                    value="Site Institucional"
                                />
                                Site institucional
                            </div>

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="service"
                                    value="E-commerce"
                                />
                                E-commerce
                            </div>

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="service"
                                    value="API"
                                />
                                API
                            </div>

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="service"
                                    value="database"
                                />
                                Banco de dados
                            </div>

                        </div>

                        <div className={styles.section_form}>

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="service"
                                    value="WebDesign"
                                />
                                WebDesign
                            </div>

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="service"
                                    value="SocialMedia"
                                />
                                SocialMedia
                            </div>

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="service"
                                    value="Identidade Visual"
                                />
                                Identidade Visual
                            </div>

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="service"
                                    value="Identidade Visual"
                                />
                                Criativos
                            </div>

                            <div className={styles.form_check}>
                                <input
                                    type="checkbox"
                                    name="service"
                                    value="outros"
                                />
                                Outros
                            </div>
                        </div>

                        <textarea className={styles.input_formtext} id="" cols="30" rows="8" required placeholder="Conte mais sobre seu projeto..." name="message"></textarea>
                        <input className={styles.button_form} type="submit" value="Enviar mensagem"></input>
                    </form>
                    <p className={styles.title_form}>Ou entre em contato via: </p>
                    <a className={styles.link_contact} href="https://contate.me/.boxx" target="_blank" rel="noreferrer">
                        <img src={whatsapp} alt="" />
                    </a>
                </div>
            )}
        </>

    )
}

export default FormBudget