import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import facebook from '../../../images/facebook.svg';
import twitter from '../../../images/twitter.svg';
import youtube from '../../../images/youtube.svg';

const useStyles = makeStyles({
  mainLinks: {
    position: 'absolute',
    right: '0',
    bottom: '0'
  },
  mainLinksImg: {
    maxWidth: '412px',
    height: '90px',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  },
  mainLinksBox: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    
    '& img': {
      width: '30px',
      height: '30px',
      marginLeft: '10px',
      cursor: 'pointer'
    }
  }
})

const Links = ({ images }) => {
  const classes = useStyles()
  
  return (
    <div className={classes.mainLinks}>
      <div className={classes.mainLinksImg}>
        <img src={images} alt="images" />
      </div>
      <div className={classes.mainLinksBox}>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="" />
        </a>
        <a href="https://www.youtube.com/">
          <img src={youtube} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Links;
