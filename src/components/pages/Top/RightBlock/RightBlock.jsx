import React from 'react';
import styles from './RightBlock.module.scss';
import BlockTitle from '../BlockTitle/BlockTitle';
import BlockRow from '../BlockRow/BlockRow';
import RowBlock from './RowBlock/RowBlock';
import Footer from './Footer/Footer';

const RightBlock = () => {
    return (
        <div className = {styles.rightBlock}>
            <BlockTitle block = 'right'/>
            <BlockRow />
            <RowBlock />
            <Footer />
        </div>
    );
}

export default RightBlock;