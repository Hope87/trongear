import React from 'react';
import { makeStyles } from '@material-ui/core';
import logo from '../../../images/logo.png';
import letsRide from '../../../images/lets_ride.png';

const useStyles = makeStyles({
  mainText: {
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
    },
  },
  mainTextLogo: {
    maxWidth: '825px',
    boxShadow: '0 2px 79px rgba(18, 18, 18, 0.09)',
    marginTop: '180px',
  },

  mainLetsRide: {
    position: 'relative',
    maxWidth: '690px',
    height: '65px',

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
      <div className={classes.mainLetsRide}>
        <img src={letsRide} alt="letsRide" />
        <h2>let`s ride</h2>
      </div>
      <p>HOW IT WORKS</p>
    </div>
  );
};

export default MainText;
