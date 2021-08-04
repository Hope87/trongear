import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  statisticElementFlag: {
    width: '40%',
    height: '25%',
    position: 'absolute',
    top: '0',
    right: '0',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
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
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
  },
  textColorWhite: {
    color: 'var(--white)'
  }
})


const StatisticElementFlag = ({flagText, flagImg, textColorWhite}) => {
  const classes = useStyles()
    
  return (
      <div className={classes.statisticElementFlag}>
      <img src={flagImg} alt="" />
       {textColorWhite ? <span style={{color: 'white'}}>{flagText}</span> : <span>{flagText}</span>}
    </div>
    );
};

export default StatisticElementFlag;