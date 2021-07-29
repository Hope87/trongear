import React from 'react';
import styles from './GarageTuning.module.scss'
import CardSmall from '../molecules/CardSmall' 
import nameOfTuning from '../../../images/svg/name_of_tuning.svg'
import tuningsImg_1 from '../../../images/garages/tuning_img_1.png'
import tuningsImg_2 from '../../../images/garages/tuning_img_2.png'
import tuningsImg_3 from '../../../images/garages/tuning_img_3.png'
import tuningsImg_4 from '../../../images/garages/tuning_img_4.png'
import tuningsImg_5 from '../../../images/garages/tuning_img_5.png'
import GarageTuningScale from '../molecules/GarageTuningScale'
import tuningRunk from '../../../images/svg/runk_lvl_tuning.svg';



const GarageTuning = () => {
    return (
        <div className={styles.GarageTuning}>
            <div className={styles.GarageTuningPanel}>
                <img src={nameOfTuning} alt="nameOfTuning"/>
            </div>
            <div className={styles.GarageTuningPanelText}>
                <p>tires & wheels</p>
                <p>+ 0</p>
            </div>
             <div className={styles.GarageTuningCards}>
             <CardSmall image={tuningsImg_1} text='0,00trx'/>
            <CardSmall image={tuningsImg_2} text='0,00trx'/>
            <CardSmall image={tuningsImg_3} text='0,00trx'/>
            <CardSmall image={tuningsImg_4} text='0,00trx'/>
            <CardSmall image={tuningsImg_5} text='0,00trx'/>
             </div>
             <div className={styles.GarageTuningScale}>
             <GarageTuningScale scaleImage={tuningRunk} scaleText="runk"/>
             <div style={{marginTop: '20px'}}>
             <GarageTuningScale scaleImage={tuningRunk} scaleText="level"/>
             </div>
             </div>
             
        </div>
    );
};

export default GarageTuning;