import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import facebook from '../../../images/facebook.svg';
import twitter from '../../../images/twitter.svg';
import youtube from '../../../images/youtube.svg';

const useStyles = makeStyles({
  links: {
    position: 'relative',
    width: '280px',
    paddingLeft: '80px',
    paddingTop: '15px',
  },

  linksBox: {
    // position: 'absolute',
    // left: '50%',
    // top: '50%',
    // transform: 'translate(-50%, -50%)',

    '& img': {
      width: '30px !important',
      height: '30px !important',
      marginLeft: '10px',
      cursor: 'pointer',
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
