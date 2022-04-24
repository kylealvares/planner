import './Modal.css';

const Modal = ({ 
        children,
        title, 
        width='400px', 
        onBackdropClick=null }) => {

    const handleClick = (e) => {
        e.target === e.currentTarget && onBackdropClick();
    }

    return (
        <div className="modal-backdrop" onClick={e => handleClick(e)}>
            <div className="modal" style={{ width }}>
                { title && <p className="modal-title">{title}</p> }
                {children}
            </div>
        </div>
    );
}

export default Modal;