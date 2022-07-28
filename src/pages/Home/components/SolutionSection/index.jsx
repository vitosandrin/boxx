import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const SolutionSection = () => {
    return (
        <section className={styles.wrapper_solution}>
            <h2 className={styles.title_solution}>Nossos Serviços</h2>
            <div className={styles.container_solution}>
                <div className={styles.box_solution}>
                    <h6 className={styles.text_solution}>Desenvolvimento</h6>
                    <Link to={'/dev'}>
                        <p className={styles.description_solution}>Quero saber mais!</p>
                    </Link>
                </div>
                <div className={styles.box_solution}>
                    <h6 className={styles.text_solution}>Design</h6>
                    <Link to={'/design'}>
                        <p className={styles.description_solution}>Quero saber mais!</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SolutionSection;