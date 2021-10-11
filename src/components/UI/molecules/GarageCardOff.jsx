import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import beforeIcon from '../../../images/garage_elements_on-05.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyles = makeStyles({
  garageCardOff: {
    maxWidth: '310px',
    height: '420px',
    position: 'relative',
    marginTop: '40px',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },

    '& h4': {
      position: 'absolute',
      top: '51%',
      left: '7%',
      textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Russo One',
      fontSize: '20px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: '21.67px',
      textAlign: 'left',
      textTransform: 'uppercase',
    },

    '& div': {
      width: '240px',
      position: 'absolute',
      top: '68%',
      left: '14%',

      '& h5': {
        color: 'var(--white)',
        fontSize: '12px',
        lineHeight: '14.88px',
        textAlign: 'left',
        textTransform: 'uppercase',
        fontFamily: 'Calibri - Bold Italic',
        fontWeight: '700',
        fontStyle: 'italic',
        letterSpacing: 'normal',

        '&::before': {
          content: `url('${beforeIcon}')`,
          position: 'absolute',
          left: '-25px',
          top: '-5px',
          width: '18px',
          height: '18px',
        },
      },

      '& p': {
        color: 'var(--white)',
        fontSize: '12px',
        lineHeight: '24.88px',
        textAlign: 'left',
        textTransform: 'uppercase',
        fontWeight: '400',
        fontStyle: 'italic',
        letterSpacing: 'normal',
        fontFamily: 'Calibri - Italic',
        marginTop: '5px',
      },
    },
  },
});

const inlineStyles = {
  transform: 'scale(1.06)',
  transition: 'all 0.4s ease-out',
};

const GarageCardOff = ({ imageOff, cardTitleOff, imageOn, cardTitleOn, onGarageMenuInformation }) => {
  const classes = useStyles();

  const [activeGarage, setActiveGarage] = useState({
    'garage 1': true,
    'garage 2': true,
    'garage 3': true,
    'garage 4': true,
    'garage 5': true,
  });

  const onHover = (id) => {
    setActiveGarage((prev) => ({ ...prev, [id]: false }));
  };

  const onLeaveContainer = (id) => {
    setActiveGarage((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className={classes.garageCardOff}>
      {activeGarage[cardTitleOn] ? (
        <>
          <LazyLoadImage
            onMouseEnter={() => {
              onHover(cardTitleOn);
              onGarageMenuInformation(cardTitleOn);
            }}
            onMouseLeave={() => onLeaveContainer(cardTitleOn)}
            src={imageOff}
            alt={cardTitleOn}
          />
          <h4>{cardTitleOff}</h4>
        </>
      ) : (
        <>
          <LazyLoadImage
            style={inlineStyles}
            onMouseEnter={() => {
              onHover(cardTitleOn);
              onGarageMenuInformation(cardTitleOn);
            }}
            onMouseLeave={() => onLeaveContainer(cardTitleOn)}
            src={imageOn}
            alt={cardTitleOn}
          />
          <h4>{cardTitleOn}</h4>
        </>
      )}
      <div>
        <h5>Price:</h5>
        <p>The game requires a browser plugin TronLink or TronWallet</p>
      </div>
    </div>
  );
};

export default GarageCardOff;
