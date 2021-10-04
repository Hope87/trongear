import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  time: {
    width: '240px',
    height: '260px',
    background: 'var(--gray-dark)',
    clipPath: 'polygon(0% 14%, 14% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
    '@media screen and (max-width: 576px)': {
      minWidth: '333px',
      marginBottom: '15px',
    },
  },

  timeHeader: {
    height: '12%',
    background: 'var(--red)',
    clipPath: 'polygon(28% 0%, 0% 0%, 100% 0%, 100% 100%, 100% 100%, 40% 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& h3': {
      textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Calibri',
      fontSize: '14px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'center',
      textTransform: 'uppercase',
      marginLeft: '80px',
    },
  },

  timeText: {
    padding: '30px',

    '&:nth-child(2)': {
      paddingBottom: '5px',
    },

    '&:nth-child(3)': {
      paddingTop: '5px',
    },

    '& p': {
      color: 'var(--white)',
      fontFamily: 'Calibri',
      fontSize: '12px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },

    '& span': {
      textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Chakra Petch',
      fontSize: '40px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
  },

  timeContainer: {
    height: '85%',
    background: 'var(--secondary)',
    opacity: '0.8',
    clipPath: 'polygon(0% 32%, 28% 0%, 100% 0%, 100% 85%, 100% 100%, 0% 100%)',
  },
  timeFooter: {
    maxWidth: '240px',
    height: '40px',
    background: 'var(--dark)',
    paddingLeft: '30px',

    '& p': {
      textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--silver)',
      fontFamily: 'Chakra Petch',
      fontSize: '14px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      paddingTop: '10px',
    },
  },
});

const TimeCard = ({ headerTitle, hidden, opacity, footerNone }) => {
  const classes = useStyles();

  return (
    <div className={classes.time}>
      <div className={classes.timeContainer}>
        <div className={classes.timeHeader}>
          <h3>{headerTitle}</h3>
        </div>

        <div className={classes.timeText}>
          {opacity ? <p style={{ opacity: '0' }}>p/ hour</p> : <p>p/ hour</p>}
          <span>00:00:00</span>
        </div>
        {!hidden && (
          <div className={classes.timeText}>
            <p>p/ day</p>
            <span>00:00:00</span>
          </div>
        )}
      </div>
      <div className={classes.timeFooter}>{!footerNone && <p>0 ($)</p>}</div>
    </div>
  );
};

export default TimeCard;
