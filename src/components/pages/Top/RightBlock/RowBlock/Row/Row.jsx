import React from 'react';
import styles from './Row.module.scss';

const Row = ({image, title, isColor, isTrx}) => {
    let styleTitle = styles.title + ' ';
    if(image == 'square'){
        styleTitle += styles.squareImg;
    }
    if(image == 'star'){
        styleTitle += styles.starImg;
    }
    if(image == 'pyramid'){
        styleTitle += styles.pyramidImg;
    }
    let styleWrapper = styles.row + ' ';
    if(isColor){
        styleWrapper += styles.colorYellow;
    }
    else{
        styleWrapper += styles.colorWhite;
    }
    let styleNumber = styles.number + ' ';
    if(isTrx){
        styleNumber += styles.trx;
    }
    return (
        <div className = {styleWrapper}>
            <span className = {styleTitle}>{title}</span>
            <span className = {styleNumber}>0</span>
        </div>
    );
}

export default Row;