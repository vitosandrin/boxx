import styles from './styles.module.css'

const Carousel = (props) => {
    return (
        <div key={props.key} className={styles.card_carousel}>
            <img className={styles.img_carousel} src={props.src} alt={props.alt} />
        </div>
    )
}

export default Carousel;