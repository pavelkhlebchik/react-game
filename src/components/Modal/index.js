import classNames from "classnames";
import { useEffect, useRef } from "react";

import modal from "./modal.module.css"

const Modal = ({title, children, onCloseModal, isOpen}) => {
  const modalEl = useRef();

  useEffect(() => {
    document.querySelector('body').style.overflow = isOpen ? 'hidden' : null;
  }, [isOpen])
  
  const handleCloseModal = () => {
    onCloseModal && onCloseModal(false);
  }

  const handleClickRoot = (event) => {
    if(!modalEl.current.contains(event.target)) {
      handleCloseModal();
    };
  }

  return (
    <div 
    className={classNames(modal.root,  {
      [modal.open]: isOpen
      })}
    onClick={handleClickRoot}
      >
      <div 
      className={classNames(modal.modal)}
      ref={modalEl}
      >
        <div className={classNames(modal.head)}>
          { title }
          <span 
          className={classNames(modal.btnClose)}
          onClick={handleCloseModal}
          ></span>
        </div>
        <div className="content">
          { children }
        </div>
      </div>
    </div>
  );
};

export default Modal;