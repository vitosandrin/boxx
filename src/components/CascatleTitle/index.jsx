import styles from './styles.module.css'

const CascatleTitle = (props) => {
    return (
        <div className={styles.cascate_container}>
            <h1 className={styles.cascate_title}>{props.text}</h1>
        </div>
    )
}

export default CascatleTitle;