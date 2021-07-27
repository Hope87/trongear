import React from 'react';
import styles from './Header.module.scss';
import header from '../../images/icons/header.svg';
import burger from '../../images/icons/burger.svg';

const Header = ({ mainModal, onModal, headerLogo }) => {
  return (
    <div className={styles.mainHeader}>
      <img src={header} alt="header" />
      <img onClick={() => onModal(!mainModal)} src={burger} alt="burger" />
      <h5>eng</h5>
      {headerLogo && (
        <div className={styles.headerLogo}>
          <img src={headerLogo} alt="logo" />
        </div>
      )}
    </div>
  );
};

export default Header;
