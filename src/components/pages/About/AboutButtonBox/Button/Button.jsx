import React from 'react'
import styles from './Button.module.scss'
import innerImage from './img/tools.png'

const Button = ({ text }) => {
  return (
    <div className={styles.button}>
      <a href='#'>
        <div className={styles.buttonUp}>
          <div className={styles.innerImage}>
            <img src={innerImage} alt='innerImage' />
          </div>
        </div>
        <div className={styles.buttonDown}>
          <div className={styles.buttonText}>{text}</div>
        </div>
      </a>
    </div>
  )
}

export default Button
