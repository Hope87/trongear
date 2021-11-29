import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import facebook from '../../../images/facebook.svg';
import twitter from '../../../images/twitter.svg';
import youtube from '../../../images/youtube.svg';

const useStyles = makeStyles({
  links: {
    display: 'flex',
    
    '& *:not(:last-child)': {
      marginRight: '20px',
    },

    '& a': {
      display: 'block',
      width: '30px',
      height: '30px',
      '& :hover': {
        transform: 'scale(1.25)',
        transition: 'all 0.3s ease 0s',
      },
      "& img": {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
  },
});

const Links = () => {
  const classes = useStyles();

  return (
    <div className={classes.links}>
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
  );
};

export default Links;
