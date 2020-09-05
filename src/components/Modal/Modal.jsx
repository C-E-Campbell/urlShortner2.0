import React from 'react';
import ReactDom from 'react-dom';
import style from './Modal.module.scss';
import cx from 'classnames';
export default function Modal({ open, onClose, hash, loading }) {
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div
        onClick={() => {
          loading(false);
          onClose();
        }}
        className={style.overlay}
      ></div>
      <div className={style.container}>
        <i
          onClick={() => {
            loading(false);
            onClose();
          }}
          className={cx('fas', 'fa-times', 'fa-3x', style.btn)}
        ></i>

        {hash === 'Enter a valid URL.' ? (
          <div>
            <h1 className={style.modalH1}>
              Sorry, that was an invalid Url. <br></br> Make sure to use a full
              Url. <br></br>e.g. https://www.google.com/
            </h1>
          </div>
        ) : (
          <div className={style.linkContainer}>
            <h1 className={style.modalH1}>Here is your link!</h1>
            <h2 className={style.modalH2}> {`https://rel.ink/${hash}`}</h2>
          </div>
        )}
      </div>
    </>,
    document.getElementById('portal')
  );
}
