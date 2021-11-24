import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button/Button';
import styles from './ButtonsBox.module.scss';

const ButtonsBox = ({ page }) => {
  return (
    <div className={styles.buttonsBox}>
      <div className={styles.buttonsBoxBtn}>
        <Link to="/about">
            <div className = {styles.leftButton}>
          <Button
            title="about"
            isActive={page === "about"}
          />
          </div>
        </Link>
        <Link to="/garage">
          <Button
            title="garage"
            isActive={page === "garage"}
          />
        </Link>
      </div>
      <div className={styles.buttonsBoxBtn}>
        <Link to="/racing">
            <div className = {styles.leftButton}>
          <Button
            title="racing"
            isActive={page === "racing"}
          />
          </div>
        </Link>
          <Link to="/top">
            <Button
              title="top"
              isActive={page === "top"}
            />
          </Link>
        </div>
    </div>
  );
};

export default ButtonsBox;
  