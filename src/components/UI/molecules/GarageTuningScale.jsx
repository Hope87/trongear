import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import scale_1 from '../../../images/1.svg';
import scale_2 from '../../../images/2.svg';
import scale_3 from '../../../images/3.svg';
import scale_4 from '../../../images/4.svg';
import scale_5 from '../../../images/5.svg';
import scale_6 from '../../../images/6.svg';
import scale_7 from '../../../images/7.svg';
import scale_8 from '../../../images/8.svg';
import scale_9 from '../../../images/9.svg';
import scale_10 from '../../../images/10.svg';
import scale_11 from '../../../images/11.svg';
import scale_12 from '../../../images/12.svg';


const useStyles = makeStyles({
  tuningScale: {
    maxWidth: '600px',
    height: '46px',
    position: 'relative',
  
    '& div': {
      maxWidth: '180px',
      height: '14px'
    }
  },

  tuningScaleImg: {
    width: '100%',
    height: '100%'
  },

  tuningScaleImages: {
    maxWidth: '480px !important',
    height: '30px !important',

    '& img': {
      width: '70px',
      height: '32px',
      objectFit: 'cover',

      '&:not(:first-child)': {
        marginLeft: '-28px'
      },

      '&:nth-child(1)': {
        width: '20px',
        marginRight: '-4px'
      }
    }
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
    position: 'absolute',
    top: '5%',
    left: '2%'
  }
})


const GarageTuningScale = ({scaleImage, scaleText}) => {
    const classes = useStyles()
    
    const scaleRender = (img) => <img  src={img} alt="tuningRunk" />;

    return (
      <div className={classes.tuningScale}>
        <div>
          <img className={classes.tuningScaleImg} src={scaleImage} alt="tuningRunk" />
          <p className={classes.tuningScaleText}>{scaleText}</p>
        </div>
  
        <div className={classes.tuningScaleImages}>
          {scaleRender(scale_1)}
          {scaleRender(scale_2)}
          {scaleRender(scale_3)}
          {scaleRender(scale_4)}
          {scaleRender(scale_5)}
          {scaleRender(scale_6)}
          {scaleRender(scale_7)}
          {scaleRender(scale_8)}
          {scaleRender(scale_9)}
          {scaleRender(scale_10)}
          {scaleRender(scale_11)}
          {scaleRender(scale_12)}
        </div>
      </div>
    );
};

export default GarageTuningScale;