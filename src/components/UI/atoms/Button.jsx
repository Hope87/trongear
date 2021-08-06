import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import buttonOff from '../../../images/buttons-05.svg';
import buttonOn from '../../../images/buttons-06.svg';

const useStyles = makeStyles({
  button: {
    width: '190px',
    height: '60px',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },

    '& h4': {
      textShadow: '1px 1px 3px rgba(18, 18, 18, 0.08)',
      color: 'var(--dark)',
      fontFamily: 'Russo One',
      fontSize: '24px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: '37.22px',
      textAlign: 'center',
      textTransform: 'uppercase',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
});

const Button = ({ title, inlineStyle }) => {
  const classes = useStyles();

  const [image, setImage] = useState(buttonOff);

  return (
    <button className={classes.button}>
      <img src={image} alt={title} onMouseEnter={() => setImage(buttonOn)} onMouseOut={() => setImage(buttonOff)} />
      <h4 style={{ ...inlineStyle }}>{title}</h4>
    </button>
  );
};

export default Button;
