import Portal from "./Portal";
import styles from "./styles.module.css";
import icon from './assets/cancelar.svg';

const Modal = ({ open, children, onClose }) => {

    if (!open) return null;
    return (
        <Portal>
            <div className={styles.overlay_modal} />
            <div className={styles.container_modal} >
                <img src={icon} alt="" className={styles.close_modal} onClick={onClose} />
                <div className={styles.content_modal}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}

export default Modal;