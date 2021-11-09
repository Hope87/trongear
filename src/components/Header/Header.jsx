import React from 'react';
import LogoTrongear from '../LogoTrongear/LogoTrongear';
import ButtonBurger from './ButtonBurger/ButtonBurger';
import Language from './Language/Language';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = ({modal, setModal, isLogo}) => {
  return (
    <div className = {styles.header}>
        <div className = {styles.logo}>
          {isLogo && 
          <Link to = "/"><LogoTrongear /></Link>
          }
        </div>
        <div className = {styles.buttonBurger}>
          <ButtonBurger modal = {modal} setModal = {setModal}/>
        </div>
        <div className = {styles.langauge}>
        <Language />
        </div>
    </div>
    );
};

export default Header;