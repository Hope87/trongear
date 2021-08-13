import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  aboutCard: {
    maxWidth: '310px',
    height: '420px',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
});

const AboutCardOff = ({ image, setActiveGarage, onActiveGarage }) => {
  const classes = useStyles();

  return (
    <div className={classes.aboutCardOff}>
      <img src={image} alt="" />
    </div>
  );
};

export default AboutCardOff;
