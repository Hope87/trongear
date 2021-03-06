import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  topPanel: {
    // width: '60%',
    maxWidth: '1260px',
    margin: '40px auto 0',
    display: 'flex',
    justifyContent: 'center',

    '& div': {
      backgroundColor: 'var(--dark)',
      clipPath: 'polygon(0% 0%, 0% 0%, 85% 0%, 100% 100%, 100% 100%, 15% 100%)',
      width: '315px',
      height: '50px',
      cursor: 'pointer',

      '&:hover': {
        background: 'linear-gradient(to right, #ebff0e 80%,  #cfe02d 95%)',

        '& p': {
          color: 'var(--dark)',
        },
      },
      '&:nth-child(1)': {
        transform: 'translate(22.5%, 0)',
      },
      '&:nth-child(2)': {
        transform: 'translate(7.5%, 0)',
      },
      '&:nth-child(3)': {
        transform: 'translate(-7.5%, 0)',
      },
      '&:nth-child(4)': {
        height: '50px',
        clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 85% 100%, 100% 100%, 15% 100%)',
        transform: 'translate(-22.5%, 0)',
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
