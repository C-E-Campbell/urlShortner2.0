import React, { useState } from 'react';
import style from './Shortner.module.scss';
import Modal from '../Modal/Modal';
import axios from 'axios';
import loadingImg from '../../images/loading.svg';
import cx from 'classnames';
export default function Shortner() {
  const [link, setLink] = useState('');
  const [isEmpty, setEmpty] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, isLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!link) {
      setEmpty(true);
    } else {
      isLoading(true);
      axios
        .post(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then((res) => {
          setData(res.data.result.short_link);
          setOpen(true);
          setLink('');
        })
        .catch((err) => {
          setData('Invalid Link');
          setError(true);
          setOpen(true);
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
          type="text"
          placeholder="Shorten a link here..."
        />
        <button className={style.button} type="submit">
          {loading ? (
            <img className={style.loading} src={loadingImg} alt="load" />
          ) : (
            'Shorten It!'
          )}
        </button>
      </form>
      {isEmpty ? <h5 className={style.h5}>Please add a link</h5> : null}
      <Modal
        loading={isLoading}
        error={error}
        hash={data}
        onClose={() => setOpen(false)}
        open={isOpen}
      ></Modal>
    </div>
  );
}
