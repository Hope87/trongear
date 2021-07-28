import React from 'react';
import styles from './Cards.module.scss';
import frame from '../../images/svg/frame_1_on.svg';
import tuningPanel from '../../images/svg/tuning_panel_1.svg';
import lockIcon from '../../images/svg/lock_icon_copy.png';

const CardMiddle = ({ image }) => {
  return (
    <div className={styles.CardMiddle}>
      <img src={frame} alt="frame" />
      <img src={tuningPanel} alt="tuningPanel" />
      <img src={image} alt={image} />
      <img src={lockIcon} alt="lockIcon" />
    </div>
  );
};

export default CardMiddle;
