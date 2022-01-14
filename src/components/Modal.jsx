import {  RiCloseLine } from "react-icons/ri";

import "../assets/css/modal.css"

const Modal = ({ children, state, changeState, title }) => {
    
  state ?  document.body.classList.add("modal-open") : document.body.classList.remove("modal-open")
  
  return (
      <>
        {state && (
          <div className="modal__section">
            <div className="modal__container">
              <div className="modal__header">{title}</div>
  
              <button className="modal__btn-close" onClick={() => changeState(false)}>
                <RiCloseLine size={20} />
              </button>
              {children}
            </div >
          </div>
        )}
      </>
    );
  };
  
  export default Modal;