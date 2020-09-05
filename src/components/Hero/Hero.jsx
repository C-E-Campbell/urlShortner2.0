import React from 'react';
import { motion } from 'framer-motion';
import style from './Hero.module.scss';
import heroImg from '../../images/illustration-working.svg';
export default function Hero() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <section className={style.heroContainer}>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        transition={{ duration: 1.5 }}
        className={style.textContainer}
      >
        <h1>More than just shorter links</h1>
        <h4>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </h4>
        <button>Get Started</button>
      </motion.div>
      <div className={style.heroImg}>
        <img src={heroImg} alt='hero' />
      </div>
    </section>
  );
}
