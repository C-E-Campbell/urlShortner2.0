import React from 'react';
import ReactDom from 'react-dom';
import style from './Modal.module.scss';
export default function Modal({ children, open, onClose }) {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div onClick={onClose} className={style.overlay}></div>
      <div className={style.container}>
        <i onClick={onClose} className='fas fa-times fa-3x btn'></i>
      </div>
    </>,
    document.getElementById('portal')
  );
}
