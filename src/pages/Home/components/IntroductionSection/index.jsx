import styles from './styles.module.css'
import { Link } from "react-router-dom";

//Assets
import astronaut from '../../assets/astronaut.webp'
import facebook from '../../../../assets/icons/facebook.svg'
import instagram from '../../../../assets/icons/instagram.svg'


const IntroductionSection = () => {

    return (
        <section className={styles.container_introduction}>
            <img className={styles.img_introduction} alt={astronaut} src={astronaut} />
            <div className={styles.info_introduction}>
                <h2 className={styles.title_introduction}>
                    O que é .boxx?
                </h2>
                <p className={styles.description_introduction}>
                    A .boxx é uma software house focada em excelência e resultados!
                    Prezamos constantemente pela autenticidade e qualidade de
                    nossas soluções. .boxx é o pacote completo pra quem
                    deseja acelerar e profissionalizar tarefas e funcionalidades.
                </p>
                <div className={styles.box_introduction}>
                    <a href='https://www.facebook.com/boxxsoftwarehouse' target="_blank" rel="noreferrer">
                        <img className={styles.box_social} src={facebook} alt={facebook} />
                    </a>
                    <a href="https://www.instagram.com/boxxsoftwarehouse/" target="_blank" rel="noreferrer">
                        <img className={styles.box_social} src={instagram} alt={instagram} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default IntroductionSection;