import React from 'react'
import styles from './Footer.module.scss'
import Links from './Links/Links'
import leftImg from './img/leftFooterMobileImg.svg'
import rightImg from './img/rightFooterMobileImg.svg'

const Footer = ({ page }) => {
  let styleLeftDiv
  let styleRightDiv = styles.rightDiv
  if (page === 'main') {
    styleLeftDiv = styles.leftDiv
    styleRightDiv = styles.rightDivMainPage
  }
  return (
    <div className={styles.footer}>
      <div className={styleLeftDiv}></div>
      <div className={styleRightDiv}>
        <Links />
      </div>
      {page === 'top' && (
        <div className={styles.topFooterLine}>earn by promoting</div>
      )}
      {page === 'racing' && (
        <div className={styles.racingFooterLine}>earn by promoting</div>
      )}
      {page === 'about' && (
        <div className={styles.aboutFooterLine}>earn by promoting</div>
      )}
      {page === 'garage' && (
        <div className={styles.garageFooterLine}>
          <span>enter the race</span>
          you are presented with 5 garages, with different levels of cars The
          first profit you will receive in an hour after participation in the
          race!
        </div>
      )}
      {page !== 'main' && page !== 'garageMenu' && (
        <div className={styles.footerMobileImg}>
          <img src={leftImg} alt='left' />
          <img src={rightImg} alt='right' />
        </div>
      )}
    </div>
  )
}
export default Footer
