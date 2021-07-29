import React from 'react';
import styles from './CardSmall.module.scss'
import elements_37 from '../../../images/svg/elements-37.svg'

const CardSmall = ({image, text}) => {
    return (
        <div className={styles.CardSmall}>
          <div>
          <img src={image} alt={image} />
          <div>
          <img src={elements_37} alt="elements" />
          <p>{text}</p>
          </div>
          </div>
        
      </div>
    );
};

export default CardSmall;