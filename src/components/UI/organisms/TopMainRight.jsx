import React from 'react';
import TopRatingPanelRow from '../molecules/TopRatingPanelRow';
import { makeStyles } from '@material-ui/core/styles';
import elements_white from '../../../images/garage_elements-white-05.svg';
import TopMainRightIcons from '../molecules/TopMainRightIcons';
import TopMainRightInfo from '../molecules/TopMainRightInfo';
import TopMainRightInfoMob from '../molecules/TopMainRightInfoMob';

const useStyles = makeStyles({
  topMainRight: {
    margin: '40px 13px 48px 30px',
  },

  topRatingPanelTitle: {
    display: 'flex',
    marginBottom: '20px',
    '@media screen and (max-width: 576px)': {
      marginBottom: '14px',
      justifyContent: 'space-between',
    },
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
      marginLeft: '15px',
      '@media screen and (max-width: 576px)': {
        fontSize: '20px',
      }
    },
    '& img': {
      width: '30px',
      height: '28px',
      marginLeft: '350px',
      '@media screen and (max-width: 576px)': {
        marginLeft: '0px',
        marginRight: '25%',
      }
    },
  },
  topMainRightBox: {
    display: 'flex',
    '@media screen and (max-width: 576px)': {
      backgroundColor: '#4a4a4b',
      opacity: '0.83',
    },
  },
});

const TopMainRight = () => {
  const classes = useStyles();
  const width = window.innerWidth;
  return (
    <div className={classes.topMainRight}>
      <div className={classes.topRatingPanelTitle}>
        <p>your rank</p>
        <img src={elements_white} alt="" />
      </div>
      <TopRatingPanelRow point="#0" name="name" total="000, 000, 000" />
      <div className={classes.topMainRightBox}>
        {/* {(width > 576) ?
          (<div>
            <TopMainRightIcons />
            <TopMainRightInfo />
          </div>)
          :*/}<TopMainRightInfoMob points={0} winnings={'0'} hour1={'0,00 trx'} hour2={'0,00 trx'} top={'0,00 trx'}/>
      </div>
    </div>
  );
};

export default TopMainRight;
