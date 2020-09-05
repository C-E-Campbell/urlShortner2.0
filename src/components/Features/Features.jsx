import React from 'react';
import Shortener from '../Shortener/Shortner';
import style from './Features.module.scss';
import SingleFeature from '../SingleFeature/SingleFeature';
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
      <div className={style.featureContainer}>
        <SingleFeature
          title={'Brand Recognition'}
          article={
            "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
          }
          icon={'fas fa-chart-line'}
        />
        <SingleFeature
          title={'Detailed Records'}
          article={
            'Gain insights into who is clicking your links. Knowing when are where people engage with your content helps inform better decisions.'
          }
          icon={'fas fa-paste'}
        />
        <SingleFeature
          title={'Fully Customizable'}
          article={
            'Improve brand awareness andd content discoverability through customizable links, supercharging audience engagement.'
          }
          icon={'fas fa-pen-alt'}
        />
      </div>
    </section>
  );
}
