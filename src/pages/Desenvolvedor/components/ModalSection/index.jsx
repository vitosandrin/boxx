import styles from './styles.module.css';

const ModalSection = () => {
    return (
        <div className={styles.modal_devcontent}>
            <p className={styles.modal_devdescription}>
                Desenvolvemos aplicações modularizadas seguindo padrões
                de componentização e boas práticas de mercado visando
                sofisticar funcionalidades implementadas, buscando
                sempre acessibilidade e sucesso das requisições do usuário.
            </p>
            <h6 className={styles.modal_devsubtitle} >Algumas de nossas stacks:</h6>
        </div>
    )
}

export default ModalSection;