import styles from './styles.module.css'

import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header_container}>

            <Link to={"/"}>
                <img src={props.logo} className={styles.logo_header} alt={props.alt} />
            </Link>

            <Link className={styles.link_header} to={"/dev"}>
                <p>Dev</p>
            </Link>

            <Link className={styles.link_header} to={"/design"}>
                <p>Design</p>
            </Link>
        </header>
    )
}

export default Header;