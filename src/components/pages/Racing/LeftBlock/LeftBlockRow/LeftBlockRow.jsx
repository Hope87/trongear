import React from 'react';
import styles from './LeftBlockRow.module.scss';
import LeftBlockElement from './LeftBlockElement/LeftBlockElement';

const LeftBlockRow = ({leftBlockColor, leftTextLabel, rightTextLabel, leftUpBlockText, rightUpBlockText, textColorNone, leftUpBlockNumber, rightUpBlockNumber, leftIcon, rightIcon}) => {
    return (
        <div className={styles.leftBlockRow}>
            <LeftBlockElement 
                isDifferentColor={leftBlockColor}
                textLabel={leftTextLabel}
                upBlockText={leftUpBlockText}
                textColorNone={textColorNone}
                upBlockNumber={leftUpBlockNumber}
                icon={leftIcon}

            />
            <LeftBlockElement  
                isDifferentColor={true}
                textLabel={rightTextLabel}
                upBlockText={rightUpBlockText}
                upBlockNumber={rightUpBlockNumber}
                icon={rightIcon}
            />
        </div>
    );
}

export default LeftBlockRow;