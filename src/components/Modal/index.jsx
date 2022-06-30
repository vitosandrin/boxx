import Portal from "./Portal";
import "./styles.css";
import icon from './assets/cancelar.svg';

const Modal = ({ open, children, onClose }) => {

    if (!open) return null;
    return (
        <Portal>
            <div className="overlay_modal" />
            <div className="container_modal" >
                <img src={icon} alt="" className="close_modal" onClick={onClose} />
                <div className="content_modal">
                    {children}
                </div>
            </div>
        </Portal>
    )
}

export default Modal;