import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  scale: {
    maxWidth: '600px',
    height: '30px',
    position: 'relative',

    '& div': {
      maxWidth: '220px',
      height: '16px',
    },
  },

  scaleFlag: {
    maxWidth: '180px',
    height: '14px',
    backgroundColor: 'var(--silver-light)',
    clipPath: 'polygon(0% 0%, 0% 0%, 90% 0%, 100% 100%, 100% 100%, 0% 100%)',
  },

  scaleContainer: {
    display: 'flex',
    maxWidth: '480px !important',
    height: '30px !important',
  },

  scaleItem: {
    width: '50px',
    height: '32px',
    marginLeft: '-17px',
    backgroundColor: 'var(--silver)',
    clipPath: 'polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)',

    '&:nth-child(1)': {
      clipPath: 'polygon(100% 0%, 0% 0%, 10% 100%)',
      width: '20px',
      height: '16px',
      marginLeft: '0px',
    },
  },
});

const GarageScale = () => {
  const classes = useStyles();

  const scaleRender = (color) => <div style={{ backgroundColor: color }} className={classes.scaleItem}></div>;

  return (
    <div className={classes.scale}>
      <div className={classes.scaleFlag}></div>

      <div className={classes.scaleContainer}>
        {scaleRender('#191919')}
        {scaleRender('#292929')}
        {scaleRender('#474747')}
        {scaleRender('#555555')}
        {scaleRender('#626262')}
        {scaleRender('#6f6f6f')}
        {scaleRender('#7c7c7c')}
        {scaleRender('#898989')}
        {scaleRender('#a2a2a2')}
        {scaleRender('#aeaeae')}
        {scaleRender('#bababa')}
        {scaleRender('#d0d2d3')}
      </div>
    </div>
  );
};

export default GarageScale;
