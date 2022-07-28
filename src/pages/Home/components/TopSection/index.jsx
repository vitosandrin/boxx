import styles from './styles.module.css';

const TopSection = () => {
    return (
        <section className={styles.outline_services}>
            <div className={styles.box_outline}>
                <h6 className={styles.title_outline}>Desenvolvimento</h6>
                <p className={styles.description_outline}>Tecnologias e ferramentas de última geração</p>
            </div>
            <div className={styles.box_outline}>
                <h6 className={styles.title_outline}>Design</h6>
                <p className={styles.description_outline}>UI/UIX de alta conversão</p>
            </div>
        </section>
    )
}


export default TopSection;