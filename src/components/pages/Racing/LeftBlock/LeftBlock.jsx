import React from 'react';
import styles from './LeftBlock.module.scss';
import LeftBlockRow from '../LeftBlock/LeftBlockRow/LeftBlockRow';
import piramideIcon from './img/piramide.svg';
import manIcon from './img/man.svg';
import carIcon from './img/car.svg';

const LeftBlock = () => {
    return (
        <div className={styles.leftBlock}>
            <div className={styles.titleRow}>
                <h2>owerall statistics</h2>
                <h2>personal statistics</h2>
            </div>
            <LeftBlockRow 
                leftTextLabel={'total invested'}
                rightTextLabel={'income p/hour'}
                leftUpBlockText={'royalties'}
                rightUpBlockText={'affiliate payout'}
                leftUpBlockNumber={'000,000,000'}
                rightUpBlockNumber={'000,000,000'}
                leftIcon={piramideIcon}
                rightIcon={piramideIcon}
            />
            <LeftBlockRow 
                leftTextLabel={'total payed'}
                rightTextLabel={'cars in the race'}
                leftUpBlockText={'royalties'}
                rightUpBlockText={'view top rasers'}
                leftUpBlockNumber={'000,000,000'}
                rightUpBlockNumber={'000,000,000'}
                leftIcon={piramideIcon}
            />
            <LeftBlockRow 
                leftTextLabel={'total riders'}
                rightTextLabel={'current assets'}
                leftUpBlockText={'viev all riders'}
                textColorNone={true}
                leftUpBlockNumber={'000,000,000'}
                rightUpBlockNumber={'000,000,000'}
                leftIcon={manIcon}
                rightIcon={piramideIcon}
            />
            <LeftBlockRow 
                leftTextLabel={'total cars'}
                rightTextLabel={'outputs'}
                leftUpBlockText={'view all cars'}
                textColorNone={true}
                leftUpBlockNumber={'000,000,000'}
                rightUpBlockNumber={'000,000,000'}
                leftIcon={carIcon}
            />
        </div>
    );
}

export default LeftBlock;