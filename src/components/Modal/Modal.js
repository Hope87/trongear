import React from 'react';
import styles from './Modal.module.scss';
import menuImg from '../../images/icons/menu_bulb.svg';

const Modal = () => {
  return (
    <div className={styles.mainModal}>
      <img src={menuImg} alt="Menu" />
      <div className={styles.mainModalMenu}>
        <p>settings</p>
        <p>start chat</p>
        <p>Notification</p>
      </div>
    </div>
  );
};

export default Modal;
