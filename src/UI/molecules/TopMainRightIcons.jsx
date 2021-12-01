import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import elements_11 from '../../../images/elements-11.svg';
import starIcon from '../../../images/starIcon.png';
import elements_white from '../../../images/garage_elements-white-05.svg';

const useStyles = makeStyles({
  topMainRightIcons: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',

    '& img': {
      width: '30px',
      height: '28px',
      marginTop: '20px',
    },
  },
});

const TopMainRightIcons = () => {
  const classes = useStyles();
  return (
    <div className={classes.topMainRightIcons}>
      <img src={elements_11} alt="" />
      <img src={starIcon} alt="" />
      <img src={elements_white} alt="" />
      <img src={elements_white} alt="" />
    </div>
  );
};

export default TopMainRightIcons;
