import React from 'react';
import style from './Navigation.module.scss';
import cx from 'classnames';
import logo from '../../images/logo.svg';

export default function Navigation() {
  return (
    <nav className={style.nav}>
      <div className={style.features}>
        <img src={logo} alt='Shortly' />
        <button className={style.link}>Features</button>
        <button className={style.link}>Pricing</button>
        <button className={style.link}>Resources</button>
      </div>
      <div className={style.signup}>
        <button className={style.link}>Login</button>
        <button className={style.signupBtn}>Sign Up</button>
      </div>
    </nav>
  );
}
