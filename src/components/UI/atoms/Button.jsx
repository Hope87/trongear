import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


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
    zIndex: '2'
  }
  }
})

const Button = ({ title, image, inlineStyle }) => {
  const classes = useStyles()

  return (
    <button className={classes.button}>
      <img src={image} alt={title} />
      <h4 style={{...inlineStyle}}>{title}</h4>
    </button>
  );
}


export default Button;
