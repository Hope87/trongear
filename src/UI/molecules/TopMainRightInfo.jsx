import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  topMainRightInfo: {
    width: '78%',
    height: '350px',
    backgroundColor: 'var(--secondary)',
    marginLeft: '60px',
    opacity: '0.7',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%)',
    '@media screen and (max-width: 576px)': {
      backgroundColor: 'inherit',
    },
  },

  topMainRightInfoRow: {
    width: '67%',
    display: 'flex',
    marginTop: '20px',
    marginLeft: '40px',
    justifyContent: 'space-between',

    '& p': {
      textShadow: '0 3px 7px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Calibri',
      fontSize: '28px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      position: 'relative',

      '& span': {
        fontSize: '12px',
        position: 'absolute',
        top: '14px',
        left: '20px',
      },
    },
  },

  topMainRightInfoFooter: {
    background: 'linear-gradient(to left, rgba(0,0,0, 1) 60%, var(--dark) 95%)',
    width: '100%',
    height: '56px',
    marginTop: '25px',
    paddingTop: '16px',

    '& p': {
      textShadow: '0 3px 7px rgba(18, 18, 18, 0.08)',
      color: '#63666a',
      fontFamily: 'Calibri',
      fontSize: '23px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginLeft: '40px',
    },
  },
});

const TopMainRightInfo = () => {
  const TopMainRightInfoRender = (title, count, sp, color) => {
    const inlineColor = {
      color: color,
    };

    return (
      <div className={classes.topMainRightInfoRow}>
        <p style={inlineColor}>{title}</p>
        <p style={inlineColor}>
          {count}
          <span>{sp}</span>
        </p>
      </div>
    );
  };

  const classes = useStyles();

  return (
    <div className={classes.topMainRightInfo}>
      {TopMainRightInfoRender('points', '0', '', 'var(--yellow)')}
      {TopMainRightInfoRender('winnings', '0')}
      {TopMainRightInfoRender('TRX / hour', '0', 'trx')}
      {TopMainRightInfoRender('TRX / day', '0', 'trx')}
      {TopMainRightInfoRender('top', '0', 'trx')}

      <div className={classes.topMainRightInfoFooter}>
        <p>see your referral account</p>
      </div>
    </div>
  );
};

export default TopMainRightInfo;
