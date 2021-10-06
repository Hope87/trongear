import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import icon1 from '../../../images/elements-11.svg';
import starIcon from '../../../images/starIcon.png';
import whiteElement from '../../../images/garage_elements-white-05.svg';

const useStyles = makeStyles({
  wrapper: {
    width: '100%',
  },
  infoBox: {
    padding: '0 10px 27px ',
  },
  infoRow: {
    display: 'flex',
    margin: '33px 0 0',
    textTransform: 'uppercase',
    fontFamily: 'Chakra Petch',
    fontSize:' 24px',
    lineHeight: '1.2',
    fontWeight: '400',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    textShadow: '0px 3px 7px rgba(18,18,18,0.07)',
    color: '#ffffff',
  },
  rowImage: {
    display: 'flex',
    justifyContent: 'center',
    flexBasis: '15%',
    '& div': {
      width: '25px',
      height: '23px',
    },
    '& img': {
      width: '100%',
    },
  },
  rowTitle: {
    display: 'flex',
    justifyContent: 'center',
    flexBasis: '50%',
   
  },
  rowValue: {
    flexBasis: '35%',
    display: 'flex',
    textTransform: 'none',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '62px',
    opacity: '0.74',
    backgroundImage: 'linear-gradient(69.0deg, #353535 24%, #000000 80%, #000000 75%)',
    fontFamily: 'Calibri',
    fontSize: '24px',
    lineHeight: '1.2',
    fontWeight: '400',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    textShadow: '0px 3px 7px rgba(18,18,18,0.07)',
    color: '#63666a',
    textAlign: 'center',
  },
});

const TopMainRightInfoMob = ({points, winnings, hour1, hour2, top}) => {
  const classes = useStyles();
  const InfoRow = (imege, title, infoValue, isColored) => {
    return (
      <div className={classes.infoRow} style={isColored && {color: '#eaff00'}}>
        <div className={classes.rowImage}>
          {imege && 
            (<div>
              <img src={imege} alt="img" />
            </div>)
          }
        </div>
        <div className={classes.rowTitle}>
          {title}
        </div>
        <div className={classes.rowValue}>
          {infoValue && infoValue}
        </div>
      </div>
    );
  };
  
    return (
      <div className={classes.wrapper}>
        <div className={classes.infoBox}>
        {InfoRow(icon1, 'points', points, true)}
        {InfoRow(starIcon, 'winnings', winnings)}
        {InfoRow(whiteElement, 'trx/hour', hour1)}
        {InfoRow(whiteElement, 'trx/hour', hour2)}
        {InfoRow(null, 'top', top)}
        </div>
        <div className={classes.footer}>
          see your referral account
        </div>
      </div>
    );
};

export default TopMainRightInfoMob;
