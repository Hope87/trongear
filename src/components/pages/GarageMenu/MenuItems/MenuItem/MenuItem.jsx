import React from 'react'
import styles from './MenuItem.module.scss'
import lock_icon from '../../../../../images/lock_icon.png'

const MenuItem = ({ icon }) => {
  return (
    <div className={styles.menuItem}>
      <img src={icon} alt='icon' />
      <img className={styles.lock} src={lock_icon} alt='lock' />
    </div>
  )
}

export default MenuItem
