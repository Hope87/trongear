import React from 'react'
import styles from './Button.module.scss'
import buttonUpImage from '../../../../../images/About_button_up.png'
import buttonDownImage from '../../../../../images/About_button_down.png'
import innerImage from '../../../../../images/About_button_up_innerImage.png'

const Button = ({ text }) => {
  return (
    <div className={styles.button}>
      <a href='#'>
        <div className={styles.buttonUp}>
          <img src={buttonUpImage} alt='buttonUp' />
          <div className={styles.innerImage}>
            <img src={innerImage} alt='innerImage' />
          </div>
        </div>
        <div className={styles.buttonDown}>
          <img src={buttonDownImage} alt='buttonDown' />
          <div className={styles.buttonText}>{text}</div>
        </div>
      </a>
    </div>
  )
}

export default Button
