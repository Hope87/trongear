import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  topRatingPanelRow: {
    display: 'flex',
  },

  topRatingPanelPoint: {
    width: '140px',
    height: '50px',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 75% 100%, 100% 100%, 0% 100%)',
    backgroundColor: 'var(--dark)',

    '& span': {
      display: 'inline-block',
      textShadow: '0 3px 7px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Chakra Petch',
      fontSize: '23px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginTop: '10px',
      marginLeft: '10px',
    },
  },

  topRatingPanelInfo: {
    // width: '720px',
    width: '78%',
    height: '50px',
    background: 'linear-gradient(to right, var(--secondary) 60%,  rgba(0,0,0,0.2) 95%)',
    clipPath: 'polygon(5.4% 0%, 0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%)',
    marginLeft: '-30px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& span': {
      marginLeft: '40px',
      color: 'var(--white)',
      fontFamily: 'Calibri',
      fontSize: '23px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },

    '& p': {
      marginRight: '80px',
      textShadow: '0 3px 7px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Calibri',
      fontSize: '24px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
  },
});

const TopRatingPanelRow = ({ point, name, total, color = '' }) => {
  const inlineColor = {
    backgroundColor: color,
  };
  const classes = useStyles();
  return (
    <div className={classes.topRatingPanelRow}>
      <div style={inlineColor} className={classes.topRatingPanelPoint}>
        <span>{point}</span>
      </div>
      <div className={classes.topRatingPanelInfo}>
        <span>{name}</span>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default TopRatingPanelRow;
