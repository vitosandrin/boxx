import './styles.css'
import whatsapp from '../../assets/whatsapp.svg'

const ContactForm = () => {
    return (
        <div className="container_contact">
                <h6 className="title_contact">Gostaria de um atendimento personalizado?</h6>
                <p className="description_contact">Entre em contato para mais informações</p>
                <a className="link_contact" href="https://contate.me/.boxx" target="_blank" rel="noreferrer">
                    <img src={whatsapp} alt="" />
                </a>
        </div>
    )
}

export default ContactForm;