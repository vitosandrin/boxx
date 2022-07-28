import styles from './styles.module.css';
import rocket from '../../../../assets/json/rocket.json'
import { Loader } from '../../../../components'

const TopSection = () => {
    return (
        <section className={styles.outline_services}>
            <div className={styles.box_outline}>
                <h6 className={styles.title_outline}>Desenvolvimento</h6>
                <p className={styles.description_outline}>Tecnologias e ferramentas de última geração</p>
            </div>
            <Loader width={175} height={175} data={rocket}/>
            <div className={styles.box_outline}>
                <h6 className={styles.title_outline}>Design</h6>
                <p className={styles.description_outline}>UI/UIX de alta conversão</p>
            </div>
        </section>
    )
}


export default TopSection;