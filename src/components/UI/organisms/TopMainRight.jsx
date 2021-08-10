import React from 'react';
import TopRatingPanelRow from '../molecules/TopRatingPanelRow';
import { makeStyles } from '@material-ui/core/styles';
import elements_white from '../../../images/garage_elements-white-05.svg';
import TopMainRightIcons from '../molecules/TopMainRightIcons';
import TopMainRightInfo from '../molecules/TopMainRightInfo';

const useStyles = makeStyles({
  topMainRight: {
    marginTop: '40px',
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
      marginLeft: '360px',
    },
    '& img': {
      width: '30px',
      height: '28px',
      marginLeft: '120px',
    },
  },

  topMainRightBox: {
    display: 'flex',
  },
});

const TopMainRight = () => {
  const classes = useStyles();

  return (
    <div className={classes.topMainRight}>
      <div className={classes.topRatingPanelTitle}>
        <p>your rank</p>
        <img src={elements_white} alt="" />
      </div>
      <TopRatingPanelRow point="#0" name="name" total="000, 000, 000" />
      <div className={classes.topMainRightBox}>
        <TopMainRightIcons />

        <TopMainRightInfo />
      </div>
    </div>
  );
};

export default TopMainRight;
