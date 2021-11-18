import React from 'react';
import LeftBlockRow from '../LeftBlock/LeftBlockRow/LeftBlockRow';
import styles from './RightBlock.module.scss';
import RightBlockRow from './RightBlockRow/RightBlockRow';

const RightBlock = () => {
  return (
    <div className={styles.rightBlock}>
      <div className={styles.titleRow}>transfer</div>
      <RightBlockRow />
      <LeftBlockRow 
        leftBlockColor={true}
        leftTextLabel={'all updated'}
        rightTextLabel={'all taken'}
        leftUpBlockNumber={'0'}
        rightUpBlockNumber={'0'}
      />
    </div>
  );
};
export default RightBlock;