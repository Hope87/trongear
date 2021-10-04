import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  statisticElementFlag: {
    width: '55%',
    height: '25%',
    position: 'absolute',
    top: '0',
    right: '0',
    clipPath: 'polygon(28% 0%, 0% 0%, 100% 0%, 100% 100%, 100% 100%, 40% 100%)',
    '@media screen and (max-width: 576px)': {
      width: '70%',
    },

    '& span': {
      fontFamily: 'Calibri',
      fontSize: '8px',
      fontWeight: '700',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'right',
      textTransform: 'uppercase',
      marginLeft: '120px',
      '@media screen and (max-width: 576px)': {
        fontSize: '16px',
         marginLeft: '100px',
      },
    },
  },
  textColorWhite: {
    color: 'var(--white)',
  },
});

const StatisticElementFlag = ({ flagText, textColorWhite, color }) => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: color }} className={classes.statisticElementFlag}>
      {textColorWhite ? <span style={{ color: 'white' }}>{flagText}</span> : <span>{flagText}</span>}
    </div>
  );
};

export default StatisticElementFlag;
