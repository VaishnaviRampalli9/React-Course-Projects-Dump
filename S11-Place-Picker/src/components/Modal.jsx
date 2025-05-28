import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(()=>{
    if(open){
      dialog.current.showModal();
    }
    else{
      dialog.current.close();
    }
  },[open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onCancel={(e) => {
      e.preventDefault(); 
      onClose();
    }} >
      {open? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};


