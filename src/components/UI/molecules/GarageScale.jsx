import React from 'react';
import styles from './GarageScale.module.scss';
import pointsRunk from '../../../images/svg/points_runk_lvl_garage.svg';
import scale_1 from '../../../images/svg/scale_garage/1.svg';
import scale_2 from '../../../images/svg/scale_garage/2.svg';
import scale_3 from '../../../images/svg/scale_garage/3.svg';
import scale_4 from '../../../images/svg/scale_garage/4.svg';
import scale_5 from '../../../images/svg/scale_garage/5.svg';
import scale_6 from '../../../images/svg/scale_garage/6.svg';
import scale_7 from '../../../images/svg/scale_garage/7.svg';
import scale_8 from '../../../images/svg/scale_garage/8.svg';
import scale_9 from '../../../images/svg/scale_garage/9.svg';
import scale_10 from '../../../images/svg/scale_garage/10.svg';
import scale_11 from '../../../images/svg/scale_garage/11.svg';
import scale_12 from '../../../images/svg/scale_garage/12.svg';

const GarageScale = () => {
  const scaleRender = (img) => <img src={img} alt="pointsRunk" />;

  return (
    <div className={styles.scale}>
      <div>
        <img className={styles.scaleImg} src={pointsRunk} alt="pointsRunk" />
      </div>

      <div className={styles.scaleImages}>
        {scaleRender(scale_1)}
        {scaleRender(scale_2)}
        {scaleRender(scale_3)}
        {scaleRender(scale_4)}
        {scaleRender(scale_5)}
        {scaleRender(scale_6)}
        {scaleRender(scale_7)}
        {scaleRender(scale_8)}
        {scaleRender(scale_9)}
        {scaleRender(scale_10)}
        {scaleRender(scale_11)}
        {scaleRender(scale_12)}
      </div>
    </div>
  );
};

export default GarageScale;
