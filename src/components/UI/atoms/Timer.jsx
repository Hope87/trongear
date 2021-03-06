import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import timer from '../../../images/timer-18.svg';
import cn from 'classnames';

const useStyles = makeStyles({
  timer: {
    display: 'flex',
    flexDirection: 'column',

    '& p': {
      textShadow: '1px 1px 3px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Russo One',
      fontSize: '18px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: '37.97px',
      textAlign: 'center',
      textTransform: 'uppercase',
      '@media screen and (max-width: 576px)': {
        marginBottom: '11px',
      },
    },

    '& div': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  flip: {
    display: 'flex',
    fontSize: '16px',
    fontWeight: '500',
    position: 'relative',
  },

  flipBox: {
    maxWidth: '40px',
    height: '60px',
    position: 'relative',
    marginLeft: '2px',
    '@media screen and (max-width: 576px)': {
      width: '46px',
      marginLeft: '3px',
      height: '62px',
    },

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },

    '& span': {
      position: 'absolute',
      color: 'var(--yellow)',
      fontFamily: 'Chakra Petch Semi Bold Italic',
      fontSize: '26px',
      fontWeight: '400',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      lineHeight: '37.53px',
      textAlign: 'center',
      textTransform: 'uppercase',
      zIndex: '2',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  center: {
    marginLeft: '10px',
    marginRight: '10px',
    '@media screen and (max-width: 576px)': {
      margin: '0 24px 0 24px',
    },
  },
});

const Timer = ({ color = '', text = 'race of the day'}) => {
  const classes = useStyles();

  const numberColor = color;

  return (
    <div className={classes.timer}>
      <p>{text}</p>
      <div>
        <div className={classes.flip}>
          <div className={classes.flipBox}>
            <img src={timer} alt="" />
            <span style={{ color: numberColor }}>0</span>
          </div>
          <div className={classes.flipBox}>
            <img src={timer} alt="" />
            <span style={{ color: numberColor }}>0</span>
          </div>
        </div>
        <div className={cn(classes.flip, classes.center)}>
          <div className={classes.flipBox}>
            <img src={timer} alt="" />
            <span style={{ color: numberColor }}>0</span>
          </div>
          <div className={classes.flipBox}>
            <img src={timer} alt="" />
            <span style={{ color: numberColor }}>0</span>
          </div>
        </div>
        <div className={classes.flip}>
          <div className={classes.flipBox}>
            <img src={timer} alt="" />
            <span style={{ color: numberColor }}>0</span>
          </div>
          <div className={classes.flipBox}>
            <img src={timer} alt="" />
            <span style={{ color: numberColor }}>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
