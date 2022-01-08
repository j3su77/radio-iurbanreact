
import "../assets/css/modal.css"

const Modal = ({ children, state, changeState }) => {
    return (
      <>
        {state && (
          <div className="modal__section">
            <div className="modal__container">
              <div className="modal__header">titulo</div>
  
              <button className="modal__btn-close" onClick={() => changeState(false)}>x</button>
              {children}
            </div >
          </div>
        )}
      </>
    );
  };
  
  export default Modal;