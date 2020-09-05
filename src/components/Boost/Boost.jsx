import React from 'react';
import style from './Boost.module.scss';
export default function Boost() {
  return (
    <div className={style.boostContainer}>
      <h2 className={style.h2}>Boost your links today</h2>
      <button className={style.btn}>Get Started</button>
    </div>
  );
}
