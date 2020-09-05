import React from 'react';
import ReactDom from 'react-dom';
import style from './Modal.module.scss';
import cx from 'classnames';
export default function Modal({ children, open, onClose }) {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div onClick={onClose} className={style.overlay}></div>
      <div className={style.container}>
        <i
          onClick={onClose}
          className={cx('fas', 'fa-times', 'fa-3x', style.btn)}
        ></i>
      </div>
    </>,
    document.getElementById('portal')
  );
}
