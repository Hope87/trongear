import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import garageElements from '../../../images/garage_elements_on-01.svg';
import beforeIcon from '../../../images/garage_elements_on-05.svg';

const useStyles = makeStyles({
  aboutCard: {
    width: '340px',
    position: 'relative',
    marginTop: '40px',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },

  aboutImages: {
    width: '97%',
    height: '50%',
    position: 'absolute',
    top: '7px',
    left: '-4px',
    marginLeft: '10px',
    clipPath: 'polygon(0% 40%, 28% 0%, 100% 0%, 100% 90%, 100% 100%, 0% 100%)',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',

      '&:nth-child(2)': {
        top: '0',
        left: '0',
        position: 'absolute',
        zIndex: '4',
      },
    },
  },

  aboutBox: {
    width: '97%',
    height: '48%',
    backgroundColor: 'var(--dark)',
    position: 'absolute',
    bottom: '6px',
    left: '6px',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 79%, 85% 100%, 0% 100%)',
  },

  aboutFlag: {
    maxWidth: '240px',
    height: '32px',
    backgroundColor: 'var(--red)',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 85% 100%, 100% 100%, 0% 100%)',

    '& h3': {
      textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Russo One',
      fontSize: '24px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: '21.67px',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginLeft: '20px',
      paddingTop: '5px',
    },
  },

  aboutText: {
    paddingLeft: '50px',
    paddingTop: '20px',
    paddingRight: '10px',

    '& h4': {
      color: 'var(--white)',
      fontSize: '16px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: '14.88px',
      textAlign: 'left',
      textTransform: 'uppercase',
      fontFamily: 'Calibri Bold Italic',
      fontWeight: '700',

      '&::before': {
        content: `url('${beforeIcon}')`,
        position: 'absolute',
        left: '25px',
        top: '45px',
        width: '20px',
        height: '20px',
      },
    },

    '& p': {
      color: 'var(--white)',
      fontFamily: 'Calibri',
      fontSize: '14px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginTop: '10px',
    },
  },
});

const AboutCard = ({ title, car, background }) => {
  const classes = useStyles();

  return (
    <div className={classes.aboutCard}>
      <img src={garageElements} alt="" />
      <div className={classes.aboutImages}>
        <img src={background} alt="" />
        <img src={car} alt="" />
      </div>
      <div className={classes.aboutBox}>
        <div className={classes.aboutFlag}>
          <h3>{title}</h3>
        </div>
        <div className={classes.aboutText}>
          <h4>price:</h4>
          <p>The game requires a browser plugin </p>
          <p>TronLink or TronWallet</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
