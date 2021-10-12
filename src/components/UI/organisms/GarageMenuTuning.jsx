import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardSmall from '../molecules/CardSmall';
import tuningsImg_1 from '../../../images/tuning_img_1.png';
import tuningsImg_2 from '../../../images/tuning_img_2.png';
import tuningsImg_3 from '../../../images/tuning_img_3.png';
import tuningsImg_4 from '../../../images/tuning_img_4.png';
import tuningsImg_5 from '../../../images/tuning_img_5.png';
import GarageMenuTuningScale from '../molecules/GarageMenuTuningScale';
import tuningRunk from '../../../images/runk_lvl_tuning.svg';

const useStyles = makeStyles({
  garageTuning: {
    position: 'relative',
    height: '430px',
    width: '75%',
    backgroundColor: 'var(--dark)',
    opacity: '0.8',
    border: '1px solid black',
    marginTop: '30px',
    '@media screen and (max-width: 576px)': {
     width: '95%',
     height: 'auto',
     marginBottom: '143px',
    },
  },
  garageTuningPanel: {
    width: '75%',
    height: '40px',
    backgroundColor: 'var(--silver-light)',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 90% 100%, 100% 100%, 0% 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media screen and (max-width: 576px)': {
      width: '100%',
      clipPath: 'none',
      opacity: '0.74',
      backgroundImage: 'linear-gradient(69.0deg, #5e5f61 32%, #949598 80%, #949598 67%)',
      padding: '0 12px',
      boxSizing: 'border-box',
    },

    '& p': {
      color: 'var(--black)',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',

      '&:nth-child(1)': {
        fontFamily: 'Russo One',
        fontSize: '18px',
        marginLeft: '20px',
        '@media screen and (max-width: 576px)': {
          marginLeft: '0',
        },
      },

      '&:nth-child(2)': {
        textShadow: '0 0 2px rgba(18, 18, 18, 0.26)',
        fontFamily: 'Chakra Petch',
        fontSize: '24px',
        marginRight: '50px',
        '@media screen and (max-width: 576px)': {
          marginRight: '0',
        },
      },
    },
  },

  garageTuningCards: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px',
    '@media screen and (max-width: 576px)': {
      flexWrap: 'wrap',
    },
  },

  garageTuningScale: {
    marginTop: '40px',
    marginLeft: '20px',
    maxWidth: '660px',
  },
});

const cardSmallArr = [
  {
    id: 1,
    text: '0,00trx',
    image: tuningsImg_1,
  },
  {
    id: 2,
    text: '0,00trx',
    image: tuningsImg_2,
  },
  {
    id: 3,
    text: '0,00trx',
    image: tuningsImg_3,
  },
  {
    id: 4,
    text: '0,00trx',
    image: tuningsImg_4,
  },
  {
    id: 5,
    text: '0,00trx',
    image: tuningsImg_5,
  },
];

const GarageMenuTuning = () => {
  const classes = useStyles();

  return (
    <div className={classes.garageTuning}>
      <div className={classes.garageTuningPanel}>
        <p>tires & wheels</p>
        <p>+ 0</p>
      </div>

      <div className={classes.garageTuningCards}>
        {cardSmallArr.map((el) => (
          <CardSmall key={el.id} image={el.image} text={el.text} />
        ))}
      </div>
      <div className={classes.garageTuningScale}>
        <GarageMenuTuningScale scaleImage={tuningRunk} scaleText="rank" />
        <div style={{ marginTop: '20px' }}>
          <GarageMenuTuningScale scaleImage={tuningRunk} scaleText="level" />
        </div>
      </div>
    </div>
  );
};

export default GarageMenuTuning;
