import styles from './styles.module.css'

const GlitchTitle = (props) => {
    return (
        <div className={styles.glitch_container}>
            <h1 className={styles.glitch_title} data-text={props.text}>{props.text}</h1>
        </div>
    )
}

export default GlitchTitle;