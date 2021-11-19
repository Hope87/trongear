import React from 'react';
import LogoTrongear from '../LogoTrongear/LogoTrongear';
import ButtonBurger from './ButtonBurger/ButtonBurger';
import Language from './Language/Language';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import clockLink from './img/clock.svg';
import bellLink from './img/bell.png';

const Header = ({modal, setModal, isLogo}) => {
  return (
    <div className = {styles.header + ' ' + (isLogo ? styles.headerHeight152 : '')}>
        <div className = {styles.logo}>
          {isLogo && 
          <Link to = "/"><LogoTrongear /></Link>
          }
        </div>
        <div className = {styles.buttonBurger}>
          <ButtonBurger modal = {modal} setModal = {setModal}/>
        </div>
        <div className = {!isLogo ? styles.language : styles.languageMobileNone}>
        <Language />
        </div>
        <div className={isLogo ? styles.icons : styles.iconsMobileNone}>
            <a href="#">
              <img src={clockLink} alt="clock"/>
            </a>
            <a href="#">
              <img src={bellLink} alt="bell"/>
            </a>
        </div>
    </div>
    );
};

export default Header;