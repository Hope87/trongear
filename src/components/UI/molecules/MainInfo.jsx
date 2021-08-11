import React from 'react';
import { makeStyles } from '@material-ui/core';
import frame from '../../../images/frame.svg';
import warning from '../../../images/warning.svg';

const useStyles = makeStyles({
  mainInfo: {
    maxWidth: '465px',
    height: '110px',
    marginTop: '60px',
    marginLeft: '100px',
    position: 'relative',
  },
  mainInfoBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

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
    },
  },
  mainInfoWarning: {
    width: '36px',
    height: '31px',
    position: 'absolute',
    zIndex: '2',
    right: '27px',
    top: '34px',
  },
});

const MainInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainInfo}>
      <img src={frame} alt="frame" />
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
