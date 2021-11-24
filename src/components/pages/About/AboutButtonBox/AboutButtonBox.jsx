import React from 'react'
import styles from './AboutButtonBox.module.scss'
import Button from './Button/Button'

const AboutButtonBox = () => {
  return (
    <div className={styles.aboutButtonBox}>
      <Button text='about 1' />
      <Button text='about 1' />
      <Button text='about 1' />
      <Button text='about 1' />
    </div>
  )
}

export default AboutButtonBox
