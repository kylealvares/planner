import './Modal.css';

const Modal = ({ children, onBackdropClick=null }) => {

    const handleClick = (e) => {
        e.target === e.currentTarget && onBackdropClick()
    }

    return (
        <div className="modal-backdrop" onClick={e => handleClick(e)}>
            <div className="modal">
                {children}
            </div>
        </div>
    );
}

export default Modal;