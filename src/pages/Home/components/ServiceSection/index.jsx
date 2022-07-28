import styles from './styles.module.css'

import icone1 from '../../assets/icone1.svg'
import icone7 from '../../assets/icone7.svg'
import icone4 from '../../assets/icone4.svg'
import icone5 from '../../assets/icone5.svg'
import icone6 from '../../assets/icone6.svg'
import icone8 from '../../assets/icone8.svg'

const ServiceSection = () => {
    return (
        <section className={styles.container_service}>
            <h2 className={styles.title_service}>Por que ser parceiro .boxx?</h2>
            <div className={styles.box_service}>
                <p className={styles.description_service}>
                    <h3 className={styles.title_info}>Objetividade</h3>
                    Na .boxx, somos adeptos ao "clean code" e metodologias
                    ágeis de trabalho.
                </p>
                <img className={styles.img_boxservice} src={icone5} alt="" />
            </div>

            <div className={styles.box_service}>
                <img className={styles.img_boxservice} src={icone1} alt="" />
                <p className={styles.description_service}>
                    <h3 className={styles.title_info}>Atualização</h3>
                    Encontramos a lógica ideal para criar e progredir
                    um código-fonte eficaz e manutenível.
                </p>
            </div>

            <div className={styles.box_service}>
                <p className={styles.description_service}>
                    <h3 className={styles.title_info}>Conexão</h3>
                    Integrações sofisticadas com excelente acessibilidade
                    do usuário.
                </p>
                <img className={styles.img_boxservice} src={icone7} alt="" />
            </div>
            <div className={styles.box_service}>
                <img className={styles.img_boxservice} src={icone4} alt="" />
                <p className={styles.description_service}>
                    <h3 className={styles.title_info}>Exclusividade</h3>
                    Projetos desenvolvidos exclusivamente, do software ao design.
                </p>
            </div>
            <div className={styles.box_service}>
                <p className={styles.description_service}>
                    <h3 className={styles.title_info}>Competitividade</h3>
                    Insights em todo cronograma de produção visando
                    destacar diferenciais competitivos.
                </p>
                <img className={styles.img_boxservice} src={icone6} alt="" />
            </div>
            <img className={styles.img_service} src={icone8} alt="" />
        </section>
    )
}

export default ServiceSection;