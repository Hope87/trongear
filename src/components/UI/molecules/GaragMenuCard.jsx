import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import garageElements from '../../../images/garages/on/garage_elements_on-01.svg'
import flag from '../../../images/garages/off/elements-05.svg'
import beforeIcon from '../../../images/garages/on/garage_elements_on-05.svg'




const useStyles = makeStyles({
  garageMenuCard: {
    width: '18%',
    position: 'relative',
    marginTop: '40px',
  
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    },
  },

  garageMenuImages: {
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
        zIndex: '4'
      }
    }
  },

  garageMenuBox: {
    width: '97%',
    height: '48%',
    backgroundColor: 'black',
    position: 'absolute',
    bottom: '6px',
    left: '6px',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 79%, 85% 100%, 0% 100%)',
  },

  garageMenuFlag: {
    maxWidth: '240px',
    height: '32px',
    position: 'relative',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },

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
      position: 'absolute',
      top: '20%',
      left: '5%'
    }
  },

  garageMenuText: {
    paddingLeft: '50px',
    paddingTop: '20px',
    
    '& h4': {
      color: '#ffffff',
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
      }
    },

    '& p': {
      color: '#ffffff',
      fontFamily: 'Calibri',
      fontSize: '16px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginTop: '10px',
    }
  }
})


const GaragMenuCard = ({title, car, background}) => {

  const classes = useStyles()
    
  return (
      <div className={classes.garageMenuCard}>
        <img src={garageElements} alt="" />
        <div className={classes.garageMenuImages}>
          <img src={background} alt="" />
          <img src={car} alt="" />
        </div>
        <div className={classes.garageMenuBox}>
          <div className={classes.garageMenuFlag}>
            <img src={flag} alt="flag" />
            <h3>{title}</h3>
          </div>
          <div className={classes.garageMenuText}>
            <h4>price:</h4>
            <p>The game requires a browser plugin </p>
            <p>TronLink or TronWallet</p>
          </div>
        </div>
      </div>
    )
};

export default GaragMenuCard