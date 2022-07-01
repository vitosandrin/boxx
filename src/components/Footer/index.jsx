import './styles.css'
import logo from './assets/logo.svg'

const Footer = () => {
    return (
        <footer className="container_footer">
            <img src={logo} alt="" />
            <div className="info_footer">
                <p>.boxx solutions</p>
            </div>
        </footer>
    )
}

export default Footer;