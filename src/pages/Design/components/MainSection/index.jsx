import styles from './styles.module.css'
import icone from '../../assets/design.svg';

const MainSection = () => {
    return (
        <section className={styles.container_designmain}>
            <h6 className={styles.title_designmain}>Sobre nossos designers:</h6>
            <div className={styles.box_designmain}>
                <p className={styles.description_designmain}>
                    Contamos com uma equipe de alta perfomance
                    em User Interface e User Experience (UI/UX).
                    Trabalhamos observando e absorvendo detalhes do
                    seu projeto, para que subsequentemente possamos 
                    progredir em diversas abordagens 
                    que geram credibilidade, segurança, acessibilidade
                    e conversão.
                </p>
                <img className={styles.img_designmain} src={icone} alt="" />
            </div>
        </section>
    )
}

export default MainSection;