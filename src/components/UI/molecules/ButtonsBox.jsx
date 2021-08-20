import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/atoms/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonsBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '90px',
    marginRight: '100px',
    flexWrap: 'wrap',

    '@media screen and (max-width: 991.98px)': {
      marginLeft: '0px',
      marginRight: '0px',
    },
    '@media screen and (max-width: 799.98px)': {
      justifyContent: 'center',
    },

    '& div': {
      display: 'flex',
      flexWrap: 'wrap',

      '@media screen and (max-width: 589.98px)': {
        justifyContent: 'center',
        marginTop: '5px',
      },
    },
  },
  buttonsBoxBtn: {
    '& div': {
      marginLeft: '20px',

      '@media screen and (max-width: 589.98px)': {
        marginLeft: '0',
      },
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
