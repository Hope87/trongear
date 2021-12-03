import React from 'react'
import styles from './ButtonBurger.module.scss'

const ButtonBurger = ({ modal, setModal }) => {
  const buttonHandler = () => {
    setModal(true)
  }
  return (
    <div
      className={
        modal ? styles.buttonBurger + ' ' + styles.toggle : styles.buttonBurger
      }
      onClick={buttonHandler}
    >
      <div className={styles.wrapper}>
        <span></span>
      </div>
    </div>
  )
}

export default ButtonBurger
