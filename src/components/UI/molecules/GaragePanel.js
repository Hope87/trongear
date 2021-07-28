import React from 'react';
import styles from './GaragePanel.module.scss';
import panel from '../../../images/svg/total_cars_panel.svg';

const GaragePanel = () => {
  return (
    <div className={styles.garageLeftMainPanel}>
      <img src={panel} alt="panel" />
      <div>
        <p>total cars in the garage </p>
        <span>0/5</span>
      </div>
    </div>
  );
};

export default GaragePanel;
