import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames'


const useStyles = makeStyles({
    statisticElementText: {
        marginTop: '5px',
        marginLeft: '30px',
        position: 'relative',

        '& p': {
          textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
          color: 'var(--white)',
          fontFamily: 'Chakra Petch',
          fontSize: '38px',
          fontStyle: 'italic',
          letterSpacing: 'normal',
          lineHeight: 'normal',
          textAlign: 'left',
          textTransform: 'uppercase'
        },
      },

      statisticElementTextImg: {
        width: '21px !important',
        height: '24px !important',
        position: 'absolute',
        top: '50%',
        right: '5%'
      },
      statisticElementTextSp: {
        opacity: '0.6',
        textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
        fontFamily: 'Calibri',
        fontSize: '12px',
        fontStyle: 'italic',
        letterSpacing: 'normal',
        lineHeight: 'normal',
        textAlign: 'left',
        textTransform: 'uppercase'
      },

      yellow: {
        color: 'var(--yellow)'
      },

      red: {
        color: 'var(--red)'
      },

      silver: {
        color: 'var(--silver)'
      },
})


const StatisticElementText = ({hiddenText, appearance, elementText, payout, hiddenImg, elementImgStyle, elementImg}) => {

    console.log('elementImgStyle ', elementImgStyle);

    const classes = useStyles()
    
    return (
        <div className={classes.statisticElementText}>
        {hiddenText ? <span className={cn (classes.statisticElementTextSp, {
          [classes.yellow]: appearance === 'yellow',
          [classes.red]: appearance === 'red',
          [classes.silver]: appearance === 'silver'
        })} style={{opacity: '0'}}>{elementText}</span> : <span className={cn (classes.statisticElementTextSp, {
          [classes.yellow]: appearance === 'yellow',
          [classes.red]: appearance === 'red',
          [classes.silver]: appearance === 'silver'
        })}>{elementText}</span>}      
        <p>{payout}</p>
        {!hiddenImg && <img style={{...elementImgStyle}} className={classes.statisticElementTextImg} src={elementImg} alt="" />}
      </div>
    );
};

export default StatisticElementText;