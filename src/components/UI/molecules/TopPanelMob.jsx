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

  '& a': {
    textDecoration: 'none',
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
        <a href="#">
          p/hour
        </a>
      </div>
      <div>
        <a href="#">
          p/day
        </a>
      </div>
      <div>
        <a href="#">7
          total
        </a>
      </div>
      <div>
        <a href="#">  
          1x1
      </a>
      </div>
    </div>
  );
};

export default TopPanelMob;
