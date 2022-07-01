import './styles.css'

import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header_container">

            <Link to={"/"}>
                <img src={props.logo} className="logo_header" alt={props.alt} />
            </Link>

            <Link className="link_header" to={"/dev"}>
                <p >Dev</p>
            </Link>

            <Link className="link_header" to={"/design"}>
                <p>Design</p>
            </Link>
        </header>
    )
}

export default Header;