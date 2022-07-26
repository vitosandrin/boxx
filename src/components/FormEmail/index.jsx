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
        <div>
            <div className="container">
                <h2>Contato</h2>
                <form onSubmit={sendEmail}>
                    <div>
                        <div>
                            <label>Nome</label>
                            <input type="text" autoFocus required placeholder="Nome" name="name" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" required placeholder="Seu email" name="email" />
                        </div>

                        <div>
                            <label>Mensagem</label>
                            <textarea id="" cols="30" rows="8" required placeholder="Sua mensagem" name="message"></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Enviar mensagem"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormEmail