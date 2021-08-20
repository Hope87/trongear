import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GarageMenuScale from '../molecules/GarageMenuScale';
import garageElements from '../../../images/garage_elements-white-05.svg';
import pointsRunk from '../../../images/points_runk_lvl_garage.svg';
import unlock_icon from '../../../images/unlock_icon.png';
import lock_icon from '../../../images/lock_icon.png';

import wrapper from '../../../images/G_5.png';
import Slider from '../atoms/Slider';
import garageCars from '../../helpers/helpers';

const useStyles = makeStyles({
  garageMenuMain: {
    maxWidth: '1020px',
    minHeight: '582px',
    background: `url('${wrapper}') no-repeat`,
    backgroundSize: 'cover',
    backgroundPositionY: '-50px',
  },
  garageMenuMainCars: {
    height: '440px',
    position: 'relative',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  garageMenuMainText: {
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

  garageMenuMainFlag: {
    position: 'absolute',
    top: '25%',
    right: '0',
    width: '160px',
    height: '40px',
    backgroundColor: 'var(--red)',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 100%, 100% 100%, 20% 100%)',
  },
  garageMenuMainFlagItems: {
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
  garageMenuMainScale: {
    position: 'relative',
    marginLeft: '40px',
    marginTop: '-80px',
    zIndex: '4',
  },
  garageMenuMainBtn: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '4',

    '& button': {
      width: '155px',
      height: '36px',
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

  garageMenuMainPanel: {
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

const GarageMenuMain = ({ garageNumber }) => {
  const classes = useStyles();

  const totalCars = garageCars.length;

  const [buttonOperation, setButtonOperation] = useState({
    title: 'unlock',
    img: lock_icon,
    color: 'var(--red)',
    activeSlider: false,
  });

  const [carsCount, setCarsCount] = useState('');

  return (
    <div className={classes.garageMenuMain}>
      <div className={classes.garageMenuMainCars}>
        <div className={classes.garageMenuMainSlider}>
          <Slider
            filteredCars={garageCars.find((el) => el.name === garageNumber.title)}
            onActive={buttonOperation.activeSlider}
            onSetCarsCount={setCarsCount}
          />
        </div>

        <div className={classes.garageMenuMainFlag}>
          <div className={classes.garageMenuMainFlagItems}>
            <img src={garageElements} alt="" />
            <p>
              <span>0</span> TRX
            </p>
          </div>
        </div>

        <div className={classes.garageMenuMainBtn}>
          <div className={classes.garageMenuMainBtnImg}>
            <img src={buttonOperation.img} alt="lock_icon" />
          </div>
          <button
            style={{ backgroundColor: buttonOperation.color }}
            onClick={() =>
              setButtonOperation({ title: 'buy', img: unlock_icon, color: 'var(--yellow)', activeSlider: true })
            }
          >
            {buttonOperation.title}
          </button>
        </div>
      </div>

      <div className={classes.garageMenuMainText}>
        <h3>car model</h3>
        <p>modification</p>
      </div>

      <div className={classes.garageMenuMainScale}>
        <GarageMenuScale scaleImage={pointsRunk} />
        <GarageMenuScale scaleImage={pointsRunk} />
        <GarageMenuScale scaleImage={pointsRunk} />
      </div>
      <div className={classes.garageMenuMainPanel}>
        <p>total cars in the garage </p>
        <span>
          {carsCount}/{totalCars}
        </span>
      </div>
    </div>
  );
};

export default GarageMenuMain;
