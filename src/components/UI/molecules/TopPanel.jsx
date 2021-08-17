import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  topPanel: {
    width: '60%',
    margin: '34px auto 0',
    display: 'flex',

    '& div': {
      backgroundColor: 'var(--dark)',
      clipPath: 'polygon(0% 0%, 0% 0%, 85% 0%, 100% 100%, 100% 100%, 15% 100%)',
      width: '280px',
      height: '50px',
      cursor: 'pointer',

      '&:hover': {
        background: 'linear-gradient(to right, #ebff0e 80%,  #cfe02d 95%)',

        '& p': {
          color: 'var(--dark)',
        },
      },

      '&:nth-child(2)': {
        marginLeft: '-43px',
      },
      '&:nth-child(3)': {
        marginLeft: '-43px',
      },
      '&:nth-child(4)': {
        width: '420px',
        height: '50px',
        clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 85% 100%, 100% 100%, 15% 100%)',
        marginLeft: '-65px',
      },

      '& p': {
        color: 'var(--silver)',
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
