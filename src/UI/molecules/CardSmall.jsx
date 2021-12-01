import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cardSmall: {
    width: '95px',
    height: '105px',
    position: 'relative',
    '@media screen and (max-width: 576px)': {
      width: '163px',
      height: '178px',
    },

    '& div': {
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
    },
  },

  cardSmallText: {
    width: '65px',
    height: '15px',
    backgroundColor: 'var(--red)',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 80% 100%, 100% 100%, 0% 100%)',
    marginTop: '-3px',

    '& p': {
      textShadow: '0 0 8px rgba(18, 18, 18, 0.26)',
      color: 'var(--white)',
      fontFamily: 'Chakra Petch',
      fontSize: '8px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginLeft: '5px',
      paddingTop: '2px',
    },
  },
});

const CardSmall = ({ image, text }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardSmall}>
      <div>
        <img src={image} alt={image} />
        <div className={classes.cardSmallText}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
