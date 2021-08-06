import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  topPanel: {
    width: '60%',
    margin: '20px auto 0',
    display: 'flex',

    '& div': {
      '&:nth-child(1)': {
        width: '280px',
        height: '50px',
        background: 'linear-gradient(to right, #ebff0e 80%,  #cfe02d 95%)',
        clipPath: 'polygon(0% 0%, 0% 0%, 85% 0%, 100% 100%, 100% 100%, 15% 100%)',
      },
      '&:nth-child(2)': {
        width: '280px',
        height: '50px',
        background: 'linear-gradient(to right, #ebff0e 80%,  #cfe02d 95%)',
        clipPath: 'polygon(0% 0%, 0% 0%, 85% 0%, 100% 100%, 100% 100%, 15% 100%)',
        marginLeft: '-43px',
      },
      '&:nth-child(3)': {
        width: '280px',
        height: '50px',
        background: 'linear-gradient(to right, #ebff0e 80%,  #cfe02d 95%)',
        clipPath: 'polygon(0% 0%, 0% 0%, 85% 0%, 100% 100%, 100% 100%, 15% 100%)',
        marginLeft: '-43px',
      },
      '&:nth-child(4)': {
        width: '420px',
        height: '50px',
        backgroundColor: 'var(--yellow)',
        clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 85% 100%, 100% 100%, 15% 100%)',
        marginLeft: '-65px',
      },

      '& p': {
        color: 'var(--secondary)',
        fontFamily: 'Russo One',
        fontSize: '23px',
        fontWeight: '400',
        fontStyle: 'italic',
        letterSpacing: 'normal',
        lineHeight: 'normal',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: '12px',
        marginLeft: '50px',
      },
    },
  },
});

const TopPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.topPanel}>
      <div>
        <p>p/hour</p>
      </div>
      <div>
        <p>p/day</p>
      </div>
      <div>
        <p>total</p>
      </div>
      <div>
        <p>1x1</p>
      </div>
    </div>
  );
};

export default TopPanel;
