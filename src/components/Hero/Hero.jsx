import React from 'react';

import style from './Hero.module.scss';
import heroImg from '../../images/illustration-working.svg';
export default function Hero() {
  return (
    <section className={style.heroContainer}>
      <div className={style.textContainer}>
        <h1>More than just shorter links</h1>
        <h4>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </h4>
        <button>Get Started</button>
      </div>
      <div className={style.heroImg}>
        <img src={heroImg} alt='hero' />
      </div>
    </section>
  );
}
