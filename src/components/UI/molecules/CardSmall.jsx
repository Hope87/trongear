import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import elements_37 from '../../../images/svg/elements-37.svg'


const useStyles = makeStyles({
  cardSmall: {
    width: '95px',
    height: '105px',
    position: 'relative',
  
    '& div': {
      
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
      },
  
      '& div': {
        width: '65px',
        height: '15px',
        position: 'absolute',
        bottom: '0',
        left: '0',
  
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        },
  
        '& p': {
          textShadow: '0 0 8px rgba(18, 18, 18, 0.26)',
          color: 'var(--white)',
          fontFamily: 'Chakra Petch',
          fontSize: '8px',
          fontWeight: '400',
          fontStyle: 'italic',
          letterSpacing: 'normal',
          lineHeight: 'normal',
          textAlign: 'left',
          textTransform: 'uppercase',
          position: 'absolute',
          top: '50%',
          left: '45%',
          transform: 'translate(-50%, -50%)'
        }
      }
    }
  }
})


const CardSmall = ({image, text}) => {
  const classes = useStyles()
    
  return (
        <div className={classes.cardSmall}>
          <div>
          <img src={image} alt={image} />
          <div>
          <img src={elements_37} alt="elements" />
          <p>{text}</p>
          </div>
          </div>
        
      </div>
    );
};

export default CardSmall;