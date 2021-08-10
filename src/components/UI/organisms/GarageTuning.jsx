import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardSmall from '../molecules/CardSmall';
import tuningsImg_1 from '../../../images/tuning_img_1.png';
import tuningsImg_2 from '../../../images/tuning_img_2.png';
import tuningsImg_3 from '../../../images/tuning_img_3.png';
import tuningsImg_4 from '../../../images/tuning_img_4.png';
import tuningsImg_5 from '../../../images/tuning_img_5.png';
import GarageTuningScale from '../molecules/GarageTuningScale';
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
  },
  garageTuningPanel: {
    width: '75%',
    height: '40px',
    backgroundColor: 'var(--silver-light)',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 90% 100%, 100% 100%, 0% 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

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
      },

      '&:nth-child(2)': {
        textShadow: '0 0 2px rgba(18, 18, 18, 0.26)',
        fontFamily: 'Chakra Petch',
        fontSize: '24px',
        marginRight: '50px',
      },
    },
  },

  garageTuningCards: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px',
  },

  garageTuningScale: {
    marginTop: '40px',
    marginLeft: '20px',
    maxWidth: '660px',
  },
});

const GarageTuning = () => {
  const classes = useStyles();

  return (
    <div className={classes.garageTuning}>
      <div className={classes.garageTuningPanel}>
        <p>tires & wheels</p>
        <p>+ 0</p>
      </div>

      <div className={classes.garageTuningCards}>
        <CardSmall image={tuningsImg_1} text="0,00trx" />
        <CardSmall image={tuningsImg_2} text="0,00trx" />
        <CardSmall image={tuningsImg_3} text="0,00trx" />
        <CardSmall image={tuningsImg_4} text="0,00trx" />
        <CardSmall image={tuningsImg_5} text="0,00trx" />
      </div>
      <div className={classes.garageTuningScale}>
        <GarageTuningScale scaleImage={tuningRunk} scaleText="runk" />
        <div style={{ marginTop: '20px' }}>
          <GarageTuningScale scaleImage={tuningRunk} scaleText="level" />
        </div>
      </div>
    </div>
  );
};

export default GarageTuning;
