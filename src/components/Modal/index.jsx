import "./styles.css";
import ReactDOM from "react-dom";

const Modal = ({ open, children, onClose }) => {

    if (!open) return null;


    return ReactDOM.createPortal(
        <>
            <div className="overlay_modal" />
            <div className="container_modal" >
                <button onClick={onClose}>close modal</button>
                {children}
            </div>
        </>,
        document.getElementById("portal")
    )
}

export default Modal;