import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 topPanel: {
  backgroundColor: 'var(--dark)',
  height: '60px',
  marginTop: '40px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  fontFamily: 'Russo One',
  fontSize: '12.4px',
  lineHeight: '1.2',
  fontWeight: '400',
  fontStyle: 'italic',
  textTransform: 'uppercase',
  cursor: 'pointer',

  '& p': {
    color: '#53565a',

    '&:hover': {
      color: '#ecff16;',
   },
  },
 },
});

const TopPanelMob = () => {
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
        <p>7total</p>
      </div>
      <div>
        <p> 1x1</p>
      </div>
    </div>
  );
};

export default TopPanelMob;
