import './styles.css'

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    return (
        <header className="mainHeader">

            <Link to={"/"}>
                <img src={props.logo} className="logo" alt={props.alt}/>
            </Link>

            <Link to={"/dev"}>
                <p>Dev</p>
            </Link>

            <Link to={"/design"}>
                <p>Design</p>
            </Link>

            <div className="mainHeaderIcons">
                <Link to={'/'}>
                    <FontAwesomeIcon icon={faBoxOpen} color="#fff" size="3x" />
                </Link>
            </div>
            
        </header>
    )
}

export default Header;