import React from 'react'
import styles from './Button.module.scss'

const Button = ({ title, isActive }) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: isActive && 'black' }}
    >
      <div
        className={styles.innerButton}
        style={{
          backgroundColor: isActive && 'yellow',
          color: isActive && '#191919'
        }}
      >
        {title}
      </div>
    </button>
  )
}

export default Button
