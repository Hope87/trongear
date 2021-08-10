import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import amg from '../../../images/4_amg.png';
import mclaren from '../../../images/5_mclaren.png';
import GarageScale from '../../UI/molecules/GarageScale';
import garageElements from '../../../images/garage_elements-white-05.svg';
import pointsRunk from '../../../images/points_runk_lvl_garage.svg';
import unlock_icon from '../../../images/unlock_icon.png';
import wrapper from '../../../images/G_5.png';

const useStyles = makeStyles({
  garageLeftMain: {
    maxWidth: '1060px',
    minHeight: '582px',
    background: `url('${wrapper}') no-repeat`,
    backgroundSize: 'cover',
    backgroundPositionY: '-50px',
  },
  garageLeftMainCars: {
    maxWidth: '840px',
    height: '440px',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  garageLeftMainText: {
    position: 'absolute',
    top: '20%',
    left: '5%',

    '& h3': {
      textShadow: '0 0 4px rgba(18, 18, 18, 0.26)',
      color: 'var(--white)',
      fontFamily: 'Russo One',
      fontSize: '26px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },

    '& p': {
      textShadow: '0 0 4px rgba(18, 18, 18, 0.26)',
      color: 'var(--white)',
      fontFamily: 'Calibri - Light Italic',
      fontSize: '16px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginTop: '10px',
    },
  },

  garageLeftMainFlag: {
    position: 'absolute',
    top: '25%',
    right: '0',
    width: '160px',
    height: '40px',
    backgroundColor: 'var(--red)',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 100%, 100% 100%, 20% 100%)',
  },
  garageLeftMainFlagItems: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100px',
    height: '18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& img': {
      width: '20px',
      height: '20px',
    },
    '& p': {
      color: 'var(--white)',
      fontFamily: 'Chakra Petch',
      fontSize: '18px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      zIndex: '3',
    },
  },
  garageLeftMainScale: {
    position: 'relative',
    marginLeft: '40px',
    marginTop: '-80px',
    zIndex: '4',
  },
  garageLeftMainBtn: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& button': {
      width: '155px',
      height: '36px',
      backgroundColor: 'var(--yellow)',
      border: 'none',
      clipPath: 'polygon(0% 50%, 10% 0%, 100% 0%, 100% 50%, 90% 100%, 0% 100%)',

      textShadow: '0 0 4px rgba(18, 18, 18, 0.26)',
      color: 'var(--dark)',
      fontFamily: 'Russo One',
      fontSize: '18px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'center',
      textTransform: 'uppercase',
      cursor: 'pointer',
    },
  },
  garageLeftMainBtnImg: {
    width: '30px',
    height: '26px',
    marginBottom: '10px',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },

  garageLeftMainPanel: {
    width: '100%',
    maxWidth: '860px',
    height: '44px',
    marginTop: '40px',
    background: 'linear-gradient(to right, var(--dark) 40%, rgba(0, 0, 0, 0.5) 95%)',
    clipPath: 'polygon(0% 0%, 0% 0%, 94% 0%, 100% 100%, 90% 100%, 0% 100%)',
    display: 'flex',
    alignItems: 'center',

    '& p': {
      textShadow: '0 0 2px rgba(18, 18, 18, 0.26)',
      color: 'var(--white)',
      fontFamily: 'Russo One',
      fontSize: '12px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginLeft: '40px',
    },

    '& span': {
      color: 'var(--white)',
      fontFamily: 'Chakra Petch',
      fontSize: '24px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginLeft: '20px',
    },
  },
});

const GarageMain = () => {
  const classes = useStyles();
  return (
    <div className={classes.garageLeftMain}>
      <div className={classes.garageLeftMainCars}>
        <img src={amg} alt="" />
        <img src={mclaren} alt="" />
      </div>

      <div className={classes.garageLeftMainText}>
        <h3>car model</h3>
        <p>modification</p>
      </div>

      <div className={classes.garageLeftMainFlag}>
        <div className={classes.garageLeftMainFlagItems}>
          <img src={garageElements} alt="" />
          <p>
            <span>0</span> TRX
          </p>
        </div>
      </div>

      <div className={classes.garageLeftMainBtn}>
        <div className={classes.garageLeftMainBtnImg}>
          <img src={unlock_icon} alt="unlock_icon" />
        </div>
        <button>buy</button>
      </div>

      <div className={classes.garageLeftMainScale}>
        <GarageScale scaleImage={pointsRunk} />
        <GarageScale scaleImage={pointsRunk} />
        <GarageScale scaleImage={pointsRunk} />
      </div>
      <div className={classes.garageLeftMainPanel}>
        <p>total cars in the garage </p>
        <span>0/5</span>
      </div>
    </div>
  );
};

export default GarageMain;
