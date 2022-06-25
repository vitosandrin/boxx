import './styles.css'

const GlitchTitle = (props) => {
    return (
        <div className="glitch_container">
            <h1 className="glitch_title" data-text={props.text}>{props.text}</h1>
        </div>
    )
}

export default GlitchTitle;