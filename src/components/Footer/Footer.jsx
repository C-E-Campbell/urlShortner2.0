import React from 'react';
import style from './Footer.module.scss';
import logo from '../../images/logo2.svg';
export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.innerContainer}>
        <div className={style.logoContainer}>
          <img src={logo} alt='shortly' />
        </div>
        <div className={style.linksContainer}>
          <div>
            <div>
              <h3 className={style.headline}>Features</h3>
            </div>
            <div className={style.links}>
              <h3>Link Shortening</h3>
              <h3>Branded Links</h3>
              <h3>Analytics</h3>
            </div>
          </div>
          <div>
            <div>
              <h3 className={style.headline}>Resources</h3>
            </div>
            <div className={style.links}>
              <h3>Blog</h3>
              <h3>Developers</h3>
              <h3>Support</h3>
            </div>
          </div>
          <div>
            <div>
              <h3 className={style.headline}>Company</h3>
            </div>
            <div className={style.links}>
              <h3>About</h3>
              <h3>Our Team</h3>
              <h3>Careers</h3>
              <h3>Contact</h3>
            </div>
          </div>
        </div>
        <div className={style.socialContainer}>
          <i className='fab fa-facebook fa-3x icon'></i>
          <i className='fab fa-twitter fa-3x icon'></i>
          <i className='fab fa-pinterest fa-3x icon'></i>
          <i className='fab fa-instagram fa-3x icon'></i>
        </div>
      </div>
    </div>
  );
}
