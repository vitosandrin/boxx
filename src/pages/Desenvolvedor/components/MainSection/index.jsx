import styles from './styles.module.css'
import icone from '../../assets/services.svg';

const MainSection = () => {
    return (
        <section className={styles.container_devmain}>
            <h6 className={styles.title_devmain}>Sobre nossos desenvolvedores:</h6>
            <div className={styles.box_devmain}>
                <img className={styles.img_devmain} src={icone} alt="" />
                <p className={styles.description_devmain}>
                    Contamos com uma equipe ágil e eficiente
                    em nossas soluções de desenvolvimento, mantemos
                    fidelidade e objetividade à proposta acolhida e
                    somos extremamente assertivos quanto a execução
                    e produção.
                </p>
            </div>
        </section>
    )
}

export default MainSection;