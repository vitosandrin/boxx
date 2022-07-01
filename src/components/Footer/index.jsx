import './styles.css'
import logo from './assets/logo.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'

const Footer = () => {
    return (
        <footer className="container_footer">
            <div className="footer_links">
                <img src={logo} alt="" />
                <a href="https://www.instagram.com/boxxsolutions/" target="_blank" rel="noreferrer">
                    <img className="icon_footer" src={instagram} alt={instagram} />
                </a>
                <a href="https://www.instagram.com/boxxsolutions/" target="_blank" rel="noreferrer">
                    <img className="icon_footer" src={facebook} alt={facebook} />
                </a>
            </div>
            <p className="description_footer">
                .boxx Software House since 2022
            </p>
        </footer>
    )
}

export default Footer;