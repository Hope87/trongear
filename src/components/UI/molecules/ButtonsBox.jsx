import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/atoms/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonsBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '100px',
    marginRight: '100px',

    '& div': {
      display: 'flex',
    },
  },
  buttonsBoxBtn: {
    '& div': {
      marginLeft: '20px',
    },
  },
});

const ButtonsBox = () => {
  const classes = useStyles();

  return (
    <div className={classes.buttonsBox}>
      <div className={classes.buttonsBoxBtn}>
        <Link to="/about">
          <Button title="about" />
        </Link>
        <div>
          <Link to="/garage">
            <Button title="garage" />
          </Link>
        </div>
      </div>
      <div className={classes.buttonsBoxBtn}>
        <Link to="/racing">
          <Button title="racing" />
        </Link>
        <div>
          <Link to="/top">
            <Button title="top" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonsBox;
