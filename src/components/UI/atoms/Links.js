import React from 'react';
import styles from './Links.module.scss';
import facebook from '../../../images/icons/facebook.svg';
import twitter from '../../../images/icons/twitter.svg';
import youtube from '../../../images/icons/youtube.svg';

const Links = ({ images }) => {
  return (
    <div className={styles.mainLinks}>
      <div className={styles.mainLinksImg}>
        <img src={images} alt="images" />
      </div>
      <div className={styles.mainLinksBox}>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="" />
        </a>
        <a href="https://www.youtube.com/">
          <img src={youtube} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Links;
