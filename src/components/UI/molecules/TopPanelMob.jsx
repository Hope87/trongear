import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 
});

const TopPanelMob = () => {
  const classes = useStyles();

  return (
    <div className={classes.topPanel}>
      <div>p/hour</div>
      <div>p/day</div>
      <div>total</div>
      <div>1x1</div>
    </div>
  );
};

export default TopPanelMob;
