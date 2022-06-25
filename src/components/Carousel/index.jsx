import './styles.css'

const Carousel = (props) => {
    return (
        <div key={props.key} className="card_carousel">
            <img className="img_carousel" src={props.src} alt={props.alt} />
        </div>
    )
}

export default Carousel;