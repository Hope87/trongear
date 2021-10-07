import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopRatingPanelRow from './TopRatingPanelRow';

const useStyles = makeStyles({
  topRatingPanelContainer: {
    marginLeft: '30px',
    '@media screen and (max-width: 576px)': {
      margin: '0 13px',
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

const TopRatingPanelContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.topRatingPanelContainer}>
      <TopRatingPanelRow point="#1" name="name" total="000, 000, 000" color="#c02232" />
      <TopRatingPanelRow point="#2" name="name" total="000, 000, 000" color="#9e9e9e" />
      <TopRatingPanelRow point="#3" name="name" total="000, 000, 000" color="#6e6e6e" />
      <TopRatingPanelRow point="#4 - 10" name="name" total="000, 000, 000" />
      <TopRatingPanelRow point="#11 - 50" name="name" total="000, 000, 000" />
      <TopRatingPanelRow point="#51 - 100" name="name" total="000, 000, 000" />
      <TopRatingPanelRow point="#101 - ..." name="name" total="000, 000, 000" />
    </div>
  );
};

export default TopRatingPanelContainer;
