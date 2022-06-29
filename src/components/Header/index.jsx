import './styles.css'

import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header_container">

            <Link to={"/"}>
                <img src={props.logo} className="logo_header" alt={props.alt}/>
            </Link>

            <Link to={"/dev"}>
                <p>Dev</p>
            </Link>

            <Link to={"/design"}>
                <p>Design</p>
            </Link>
            
            <Link to={"/trafego"}>
                <p>Trafego</p>
            </Link>
        </header>
    )
}

export default Header;