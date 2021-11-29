import React from 'react';
import { makeStyles } from '@material-ui/core';
import logo from '../../../images/logo.png';
import letsRide from '../../../images/lets_ride.png';
import logoForMobile from '../../../images/logoForMobile.png';

const useStyles = makeStyles({
  mainText: {
    marginTop: '100px',
    '@media screen and (max-width: 576px)': {
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    '& p': {
      color: 'var(--red)',
      fontFamily: 'Calibri',
      fontSize: '36px',
      fontWeight: '700',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginTop: '60px',
      marginLeft: '220px',

      '@media screen and (max-width: 576px)': {
        marginTop: '52px',
        marginLeft: '0',
        fontSize: '40px',
        lineHeight: '26px',
      },
      // '@media screen and (max-width: 579.98px)': {
      //   marginLeft: '170px',
      // },
      // '@media screen and (max-width: 429.98px)': {
      //   marginLeft: '120px',
      // },
      // '@media screen and (max-width: 360px)': {
      //   marginLeft: '80px',
      // },
    },
  },
  mainTextLogo: {
    maxWidth: '825px',
    boxShadow: '0 2px 79px rgba(18, 18, 18, 0.09)',
    '@media screen and (max-width: 576px)': {
      display: 'none',
    },
  },

  logoForMobile: {
    display: 'none',
    '@media screen and (max-width: 576px)': {
      display: 'block',
      //width: '325px',
      height: '43px',
    },
  },

  mainLetsRide: {
    position: 'relative',
    maxWidth: '690px',
    height: '65px',
    '& img': {
      width: '100%',
      objectFit: 'fill',
    },
    '@media screen and (max-width: 576px)': {
      marginTop: '61px',
      width: '320px',
      height: '54px',
    },

    '& h2': {
      textShadow: '0 6px 13px rgba(18, 18, 18, 0.08)',
      fontFamily: 'Russo One',
      fontSize: '60px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'center',
      textTransform: 'uppercase',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      '@media screen and (max-width: 679.98px)': {
        fontSize: '50px',
      },

      '@media screen and (max-width: 579.98px)': {
        fontSize: '40px',
      },
      '@media screen and (max-width: 576px)': {
        width: '100%',
      },
    },
  },
});

const MainText = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainText}>
      <h1 className={classes.mainTextLogo}>
        <img src={logo} alt="logo" />
      </h1>
          {/* Логотип для мобильной версии */}
      <div className={classes.logoForMobile}>
        <img src={logoForMobile} alt="logo" />
      </div>
      {/*------------------------------------*/}
      <div className={classes.mainLetsRide}>
        <img src={letsRide} alt="letsRide" />
        <h2>let`s ride</h2>
      </div>
      <p>HOW IT WORKS</p>
    </div>
  );
};

export default MainText;
