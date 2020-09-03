import React from 'react';
import Shortener from '../Shortener/Shortner';
import style from './Features.module.scss';
export default function Features() {
  return (
    <section className={style.container}>
      <Shortener />
      <div className={style.textContainer}>
        <h2>Advanced Statistics</h2>
        <h4>
          Track how your links are performing across the web with our <br></br>
          advanced statistics dashboard.
        </h4>
      </div>
      <div></div>
    </section>
  );
}
