import React from 'react';
import styles from './GarageButtons.module.scss'
import Button from '../../UI/atoms/Button';
import Timer from '../../UI/atoms/Timer';
import buttonsImg from '../../../images/buttons/buttons-06.svg';

const GarageButtons = () => {
    return (
        <div className={styles.buttonsBox}>
        <div className={styles.buttonsBoxBtn}>
          <Button title="about" image={buttonsImg} />
          <div>
            <Button title="garage" image={buttonsImg} />
          </div>
        </div>
        <div className={styles.buttonsBoxTimer}>
          <p>race of the day</p>
          <Timer />
        </div>
        <div className={styles.buttonsBoxBtn}>
          <Button title="racing" image={buttonsImg} />
          <div>
            <Button title="top" image={buttonsImg} />
          </div>
        </div>
      </div>
    );
};

export default GarageButtons;