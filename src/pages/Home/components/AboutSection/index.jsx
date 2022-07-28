import styles from './styles.module.css'
//Assets
import document from '../../assets/document.svg'
import talk from '../../assets/talk.svg'
import contract from '../../assets/contract.svg'
import selected from '../../assets/selected.svg'
import sprint from '../../assets/sprint.svg'
import finished from '../../assets/finished.svg'

const AboutSection = () => {
    return (
        <section className={styles.container_about}>
            <h2>O que esperar da .boxx?</h2>
            <div className={styles.container_aboutinfo}>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={document} alt="" />
                    <h3 className={styles.title_aboutinfo}>Briefing</h3>
                    <p className={styles.description_aboutinfo}>
                        Coletamos dados e informações sobre seu projeto
                        e suas particularidades com um questionário
                        padrão operacional.
                    </p>
                </div>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={talk} alt="" />
                    <h3 className={styles.title_aboutinfo}>Call</h3>
                    <p className={styles.description_aboutinfo}>
                        Agendamos uma reunião para apresentar nossa
                        proposta após ter feito uma cotação exclusiva.
                    </p>
                </div>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={selected} alt="" />
                    <h3 className={styles.title_aboutinfo}>Aprovação</h3>
                    <p className={styles.description_aboutinfo}>
                        Apresentamos e procuramos as melhores alternativas
                        para atender as solicitações do usuário.
                    </p>
                </div>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={contract} alt="" />
                    <h3 className={styles.title_aboutinfo}>Contrato</h3>
                    <p className={styles.description_aboutinfo}>
                        Estabelecemos contrato de prestação de serviço
                        para resguardar os interesses do contratante
                        e contratado.
                    </p>
                </div>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={sprint} alt="" />
                    <h3 className={styles.title_aboutinfo}>Sprints</h3>
                    <p className={styles.description_aboutinfo}>
                        Sprints, relatórios e reuniões definidas
                        em contrato conforme necessidade e prazo
                        do projeto.
                    </p>
                </div>
                <div className={styles.box_aboutinfo}>
                    <img className={styles.img_aboutinfo} src={finished} alt="" />
                    <h3 className={styles.title_aboutinfo}>Entrega</h3>
                    <p className={styles.description_aboutinfo}>
                        Prezamos por uma entrega profissional, respeitando
                        prazos e responsabilidades para maior satisfação
                        dos clientes.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection