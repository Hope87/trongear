import React from 'react';
import { makeStyles } from '@material-ui/core';
import frame from '../../../images/frame.svg';
import frameForMobile from '../../../images/frameForMobile.png';
import warning from '../../../images/warning.svg';

const useStyles = makeStyles({
  mainInfo: {
    maxWidth: '465px',
    height: '110px',
    marginTop: '60px',
    marginLeft: '100px',
    position: 'relative',

    '@media screen and (max-width: 498.98px)': {
      marginLeft: '0px',
      marginTop: '46px',
    },

    '@media screen and (max-width: 359.98px)': {
      marginLeft: '0px',
    },

    '& >img': {
      paddingBottom: '40px',
      '@media screen and (max-width: 576px)': {
        display: 'none',
      },
    },
  },
  frameForMobile: {
    display: 'none',
    width: '290px',
    height: '117px',
    margin: '0 auto',
    position: 'relative',
    '@media screen and (max-width: 576px)': {
      display: 'block',
    },
  },
  warningImage: {
    width: '34px',
    height: '29px',
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translate(50%, -50%)',
    '& img':{
      width: '100%',
    },
  },
  mainInfoBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '@media screen and (max-width: 576px)': {
      width: '100%',
    },

    '& p': {
      color: 'var(--white)',
      fontFamily: 'Calibri',
      fontSize: '12px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      textAlign: 'center',
      textTransform: 'uppercase',

      '& span': {
        color: 'var(--red)',
        fontWeight: '600',
      },

      '@media screen and (max-width: 576px)': {
        fontSize: '14.8px',
      },
    },
  },
  mainInfoWarning: {
    width: '36px',
    height: '31px',
    position: 'absolute',
    zIndex: '2',
    right: '27px',
    top: '34px',

    '@media screen and (max-width: 576px)': {
      display: 'none',
    },
  },

});

const MainInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainInfo}>
      <img src={frame} alt="frame" />
      {/**###################Mobile version */}
      <div className={classes.frameForMobile}>
        <img src={frameForMobile} alt="frame" />
        <div className={classes.warningImage}>
        <img src={warning} alt="Warning" />
        </div>
      </div>
      {/**################################## */}
      <div className={classes.mainInfoBox}>
        <p>
          <span>Important information</span>
          <br />
          The game requires a browser plugin
          <br />
          <span>TronLink</span> or <span>TronWallet</span>
        </p>
      </div>

      <div className={classes.mainInfoWarning}>
        <img src={warning} alt="Warning" />
      </div>
    </div>
  );
};

export default MainInfo;
