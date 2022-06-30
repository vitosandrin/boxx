import Portal from "./Portal";
import "./styles.css";

const Modal = ({ open, children, onClose }) => {

    if (!open) return null;
    return (
        <Portal>
            <div className="overlay_modal" />
            <div className="container_modal" >
                <button onClick={onClose}>close modal</button>
                {children}
            </div>
        </Portal>
    )
}

export default Modal;