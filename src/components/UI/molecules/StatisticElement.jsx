import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import elements_01 from '../../../images/elements-01.svg';
import StatisticElementFlag from './StatisticElementFlag';
import StatisticElementText from './StatisticElementText';

const useStyles = makeStyles({
  statisticElement: {
    maxWidth: '346px',
    position: 'relative',
    '@media screen and (max-width: 576px)': {
      maxWidth: '333px',
      margin: '0 13px',
    },

    '& img': {
      width: '100%',
      height: '67%',
      objectFit: 'cover',
    },
  },
  statisticElementBox: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '346px',
    height: '90px',
    backgroundColor: 'var(--dark)',
    clipPath: 'polygon(0% 28%, 9% 0%, 100% 0%, 100% 90%, 100% 100%, 0% 100%)',
    '@media screen and (max-width: 576px)': {
      width: '333px',
    },
  },

  statisticElementFooter: {
    height: '26px',
    width: '346px',
    backgroundColor: 'var(--dark)',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 90% 100%, 100% 100%, 0% 100%)',
    '@media screen and (max-width: 576px)': {
      width: '333px',
    },

    '& p': {
      textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--silver)',
      fontFamily: 'Chakra Petch',
      fontSize: '12px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginLeft: '30px',
      paddingTop: '5px',
      '@media screen and (max-width: 576px)': {
        fontSize: '16px',
      },
    },
  },
});

const StatisticElement = ({
  flagText,
  elementText,
  payout,
  elementImg,
  hiddenImg,
  hiddenText,
  textColorWhite,
  appearance,
  color,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.statisticElement}>
      <img src={elements_01} alt="" />
      <div className={classes.statisticElementBox}>
        <StatisticElementFlag flagText={flagText} color={color} textColorWhite={textColorWhite} />

        <StatisticElementText
          elementText={elementText}
          payout={payout}
          elementImg={elementImg}
          hiddenImg={hiddenImg}
          hiddenText={hiddenText}
          appearance={appearance}
        />
      </div>

      <div className={classes.statisticElementFooter}>
        <p>
          {payout} <span>($)</span>
        </p>
      </div>
    </div>
  );
};

export default StatisticElement;
