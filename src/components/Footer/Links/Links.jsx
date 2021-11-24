import React from 'react';
import styles from './Links.module.scss';

const Links = () => {
    return (
        <div className = {styles.links}>
            <a href = "https://www.youtube.com/" target = "blank"></a>
            <a href = "https://www.facebook.com/" target = "blank"></a>
            <a href = "https://twitter.com/" target = "blank"></a>
        </div>
    );
}
export default Links;