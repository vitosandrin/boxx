import styles from  './styles.module.css';

const ModalSection = () => {
    return (
        <div className={styles.modal_designcontent}>
            <p className={styles.modal_designdescription}>
                Prezamos pela autenticidade e originalidade de
                sua marca, prototipamos projetos únicos e
                especialmente planejados para suprir necessidades
                básicas do visual da sua empresa.
            </p>
            <h6 className={styles.modal_designsubtitle}>Ferramentas utilizadas:</h6>
        </div>
    )
}

export default ModalSection;