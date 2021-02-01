import React, { useRef } from 'react';
import ReactDom from 'react-dom';
import style from './Modal.module.scss';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cx from 'classnames';
export default function Modal({ open, onClose, hash, loading }) {
  const linkText = useRef(null);
  const notify = () => toast('Copied!');
  if (!open) {
    return null;
  }

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return ReactDom.createPortal(
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
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
            <input
              readOnly
              value={hash}
              ref={linkText}
              className={style.modalH2}
            />
            <button
              className={style.modalBTN}
              onClick={() => {
                linkText.current.select();
                document.execCommand('copy');

                notify();
                linkText.current.blur();
              }}
            >
              Copy!
            </button>
            <ToastContainer autoClose={2000} />
          </div>
        )}
      </div>
    </motion.div>,
    document.getElementById('portal')
  );
}
