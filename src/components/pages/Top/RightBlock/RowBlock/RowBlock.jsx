import React from 'react';
import Row from './Row/Row';
import styles from './RowBlock.module.scss';

const RowBlock = () => {
    return (
        <div className = {styles.rowBlock}>
            <Row title = 'points' image = 'square' isColor = {true}/>
            <Row title = 'winnings' image = 'star'/>
            <Row title = 'trx / hour' image = 'pyramid' isTrx = {true}/>
            <Row title = 'trx / day' image = 'pyramid' isTrx = {true}/>
            <Row title = 'top' isTrx = {true}/>
        </div>
    );
}
export default RowBlock;