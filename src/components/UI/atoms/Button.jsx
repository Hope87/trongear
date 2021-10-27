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
    outline: 'none',
    '@media screen and (max-width: 480px)': {
      width: '155px',
      height: '49px',
      opacity: '0.9',
    },

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      color: 'var(--dark)',
    },

    '& h4': {
      textShadow: '1px 1px 3px rgba(18, 18, 18, 0.08)',
      color: 'var(--red)',
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
      '@media screen and (max-width: 480px)': {
        fontSize: '20px',
        lineHeight: '20px',
        textShadow: '0px 1px 3px rgba(18,18,18,0.07)',
      },
    },
  },
});

const Button = ({ title, isActive }) => {
  const classes = useStyles();
  const state = isActive ? { image: buttonOn, color: 'var(--dark)' } : {image: buttonOff, color: 'var(--red)' };
  const [options, setOptions] = useState(state);

  const { image, color } = options;

  return (
    <button className={classes.button}>
      <div>
        <img
          src={image}
          alt={title}
          onMouseEnter={() => setOptions({ image: buttonOn, color: 'var(--dark)' })}
          onMouseOut={() => !isActive && setOptions({ image: buttonOff, color: 'var(--red)' })}
        />
        <h4
          style={{ color: color }}
          onMouseEnter={() => setOptions({ image: buttonOn, color: 'var(--dark)' })}
          onMouseOut={() => !isActive && setOptions({ image: buttonOff, color: 'var(--red)' })}
        >
          {title}
        </h4>
      </div>
    </button>
  );
};

export default Button;
