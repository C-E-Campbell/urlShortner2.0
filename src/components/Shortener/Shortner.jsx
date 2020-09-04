import React, { useState } from 'react';
import style from './Shortner.module.scss';
import Modal from '../Modal/Modal';
import axios from 'axios';
import cx from 'classnames';
export default function Shortner() {
  const [link, setLink] = useState('');
  const [isEmpty, setEmpty] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!link) {
      setEmpty(true);
    } else {
      axios
        .post('https://rel.ink/api/links/', {
          url: link,
        })
        .then((res) => {
          alert(`https://rel.ink/${res.data.hashid}`);
          setLink('');
        });
    }
  };

  const handleChange = (e) => {
    setLink(e.target.value);
    setEmpty(false);
  };

  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          onClick={() => setEmpty(false)}
          className={cx(style.input, { [style.error]: isEmpty })}
          value={link}
          onChange={(e) => handleChange(e)}
          type='text'
          placeholder='Shorten a link here...'
        />
        <button
          onClick={() => {
            if (link) {
              setOpen(true);
            }
          }}
          className={style.button}
          type='submit'
        >
          Shorten It!
        </button>
      </form>
      {isEmpty ? <h5 className={style.h5}>Please add a link</h5> : null}
      <Modal onClose={() => setOpen(false)} open={isOpen}></Modal>
    </div>
  );
}
