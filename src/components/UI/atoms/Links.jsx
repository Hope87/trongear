import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import facebook from '../../../images/facebook.svg';
import twitter from '../../../images/twitter.svg';
import youtube from '../../../images/youtube.svg';

const useStyles = makeStyles({
  links: {
    position: 'relative',
    maxWidth: '130px',
    paddingLeft: '80px',
    paddingTop: '15px',

    '@media screen and (max-width: 479.98px)': {
      paddingLeft: '5px',
    },

    '@media screen and (max-width: 576px)': {
      maxWidth: '160px',
    },
  },

  linksBox: {
    '& img': {
      width: '30px !important',
      height: '30px !important',
      marginLeft: '10px',
      cursor: 'pointer',
      '@media screen and (max-width: 576px)': {
        marginLeft: '20px',
      },
    },
  },
});

const Links = () => {
  const classes = useStyles();

  return (
    <div className={classes.links}>
      <div className={classes.linksBox}>
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
