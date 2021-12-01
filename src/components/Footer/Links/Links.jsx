import React from 'react'
import styles from './Links.module.scss'
import youtube from './img/youtube.svg'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'

const Links = () => {
  return (
    <div className={styles.links}>
      <a href='https://www.youtube.com/' target='blank'>
        <img src={youtube} alt='icon' />
      </a>
      <a href='https://www.facebook.com/' target='blank'>
        <img src={facebook} alt='icon' />
      </a>
      <a href='https://twitter.com/' target='blank'>
        <img src={twitter} alt='icon' />
      </a>
    </div>
  )
}
export default Links
