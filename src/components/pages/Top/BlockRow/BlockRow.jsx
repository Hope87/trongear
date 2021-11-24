import React from 'react';
import styles from './BlockRow.module.scss';

const BlockRow = ({place = 0, leftBlockColor = '', name = 'name', total = '000, 000, 000'}) => {
    let style = styles.leftBlock + ' ';
    if(!leftBlockColor){
        style += styles.blackColor
    }
    else if(leftBlockColor == 'red'){
        style += styles.redColor
    }
    else if(leftBlockColor == 'light grey'){
        style += styles.lightGreyColor;
    }
    else{
        style += styles.greyColor;
    }
    return (
        <div className = {styles.blockRow}>
            <div className = {style}>{place}</div>
            <div className = {styles.rightBlock}>
                <span>{name}</span>
                <span>{total}</span>
            </div>
        </div>
    );
}

export default BlockRow;