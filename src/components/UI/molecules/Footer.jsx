import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Links from '../../UI/atoms/Links';
import leftImage from '../../../images/footer_left_image.png';
import rightImage from '../../../images/footer_right_image.png';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    height: '90px',
    justifyContent: 'space-between',
    '@media screen and (max-width: 765px)': {
      justifyContent: 'flex-end',
    },
  },
  image:{
    width: '299px',
    height: '90px',
  },
  rightImage: {
    position: 'relative',
  },
  leftImage: {
    '@media screen and (max-width: 765px)': {
      display: 'none',
    },
  },
  links: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={[classes.leftImage, classes.image].join(' ')}>
        <img src={leftImage} alt='leftImage'/>
      </div>
      <div className={[classes.rightImage, classes.image].join(' ')}>
        <img src={rightImage} alt='rightImage'/>
        <div className={classes.links}>
          <Links />
        </div>
      </div>
    </div>
  )
};

export default Footer;
