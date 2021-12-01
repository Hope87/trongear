import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tuningScale: {
    maxWidth: '600px',
    height: '46px',
    position: 'relative',
  },

  tuningScaleFlag: {
    maxWidth: '180px',
    height: '14px',
    backgroundColor: 'var(--yellow)',
    clipPath: 'polygon(0% 0%, 0% 0%, 90% 0%, 100% 100%, 100% 100%, 0% 100%)',
  },

  tuningScaleText: {
    textShadow: '0 0 2px rgba(18, 18, 18, 0.26)',
    color: 'var(--black)',
    fontFamily: 'Russo One',
    fontSize: '10px',
    fontWeight: '400',
    fontStyle: 'italic',
    letterSpacing: 'normal',
    lineHeight: 'normal',
    textAlign: 'left',
    textTransform: 'uppercase',
    paddingLeft: '10px',
    paddingTop: '2px',
  },

  tuningScaleContainer: {
    display: 'flex',
    maxWidth: '480px !important',
    height: '30px !important',
  },

  tuningScaleItem: {
    width: '50px',
    height: '32px',
    marginLeft: '-17px',
    backgroundColor: 'var(--silver)',
    clipPath: 'polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)',

    '&:nth-child(1)': {
      clipPath: 'polygon(100% 0%, 0% 0%, 10% 100%)',
      width: '22px',
      height: '32px',
      marginLeft: '0px',
    },
  },
});

const GarageTuningScale = ({ scaleText }) => {
  const classes = useStyles();

  const scaleRender = (color) => <div style={{ backgroundColor: color }} className={classes.tuningScaleItem}></div>;

  return (
    <div className={classes.tuningScale}>
      <div className={classes.tuningScaleFlag}>
        <p className={classes.tuningScaleText}>{scaleText}</p>
      </div>

      <div className={classes.tuningScaleContainer}>
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

export default GarageTuningScale;
