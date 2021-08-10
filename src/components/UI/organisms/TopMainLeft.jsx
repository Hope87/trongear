import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopRatingPanelContainer from '../molecules/TopRatingPanelContainer';
import elements_white from '../../../images/garage_elements-white-05.svg';

const useStyles = makeStyles({
  topMainLeft: {
    marginTop: '40px',
  },

  topRatingPanel: {
    marginLeft: '110px',
  },

  topRatingPanelTitle: {
    display: 'flex',
    marginBottom: '20px',
    '& p': {
      textShadow: '0 3px 7px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Russo One',
      fontSize: '23px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',

      '&:nth-child(1)': {
        marginLeft: '140px',
      },

      '&:nth-child(2)': {
        marginLeft: '80px',
      },
    },

    '& img': {
      width: '30px',
      height: '28px',
      marginLeft: '320px',
    },
  },
});

const TopMainLeft = () => {
  const classes = useStyles();
  return (
    <div className={classes.topMainLeft}>
      <div className={classes.topRatingPanelTitle}>
        <p>Position</p>
        <p>name</p>
        <img src={elements_white} alt="" />
      </div>
      <TopRatingPanelContainer />
    </div>
  );
};

export default TopMainLeft;