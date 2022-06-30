import Portal from "./Portal";
import "./styles.css";

const Modal = ({ open, children, onClose }) => {

    if (!open) return null;
    return (
        <Portal>
            <div className="overlay_modal" />
            <div className="container_modal" >
                <div className="close_modal" onClick={onClose}>X</div>
                <div className="content_modal">
                    {children}
                </div>
            </div>
        </Portal>
    )
}

export default Modal;