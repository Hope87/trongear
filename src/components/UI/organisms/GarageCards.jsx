import React from 'react';
import styles from '../../pages/Garage/Garage.module.scss'
import CardMiddle from '../molecules/CardMiddle';
import tuningElements_1 from '../../../images/svg/tuning_elements_1_off.svg'
import tuningElements_2 from '../../../images/svg/tuning_elements_2_off.svg'
import tuningElements_3 from '../../../images/svg/tuning_elements_3_off.svg'
import tuningElements_4 from '../../../images/svg/tuning_elements_4_off.svg'
import GarageTuning from './GarageTuning';



const GarageCards = () => {
    return (
        <div className={styles.GarageRight}>
        <div className={styles.GarageCards}>
            <CardMiddle image={tuningElements_1}/>
            <CardMiddle image={tuningElements_2}/>
            <CardMiddle image={tuningElements_3}/>
            <CardMiddle image={tuningElements_4}/>
        </div>

        <GarageTuning/>
        </div>
    );
};

export default GarageCards;