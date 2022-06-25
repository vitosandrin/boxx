import './styles.css'

const CascatleTitle = (props) => {
    return (
        <div className="cascate_container">
            <h1 className="cascate_title">{props.text}</h1>
        </div>
    )
}

export default CascatleTitle;