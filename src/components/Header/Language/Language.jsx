import React, { useState } from 'react';
import styles from './Language.module.scss';

const Language = () => {
    const [state, setState] = useState('eng');
    const clickHandler = () => {
      setState(state === 'eng' ? 'рус' : 'eng');
    }
    return (
        <div className = {styles.langauge} onClick = {clickHandler}>
          {state}
        </div>
    );
}

export default Language;