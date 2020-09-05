import React from 'react';
import style from './SingleFeature.module.scss';
import cx from 'classnames';
export default function SingleFeature(props) {
  return (
    <div className={style.featureContainer}>
      <div className={style.iconContainer}>
        <i className={cx(props.icon, 'fa-2x', style.icon)}></i>
      </div>

      <h3 className={style.title}>{props.title}</h3>
      <p className={style.article}>{props.article}</p>
    </div>
  );
}
