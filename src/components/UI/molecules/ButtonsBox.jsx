import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/atoms/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonsBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: '100px',
    marginLeft: '100px',
    flexWrap: 'wrap',
    '@media screen and (max-width: 576px)': {
      marginRight: '15px',
      marginLeft: '15px',
    },

    '& Button': {
      margin: '5px auto',
    },

    '@media screen and (max-width: 1020px)': {
      justifyContent: 'center',
    },
   

    '& div': {
      display: 'flex',
      flexWrap: 'wrap',

      '@media screen and (max-width: 620px)': {
        justifyContent: 'center',
      },
    },
  },
  buttonsBoxBtn: {
    '& div': {
      marginLeft: '20px',

      '@media screen and (max-width: 620px)': {
        marginLeft: '0',
      },
      
    },
  },
});

const ButtonsBox = ({page}) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonsBox}>
      <div className={classes.buttonsBoxBtn}>
        <Link to="/about">
          <Button title="about" isActive ={page === 'about'}/>
        </Link>
        <div>
          <Link to="/garage">
            <Button title="garage"  isActive ={page === 'garage'}/>
          </Link>
        </div>
      </div>
      <div className={classes.buttonsBoxBtn}>
        <Link to="/racing">
          <Button title="racing"  isActive ={page === 'racing'}/>
        </Link>
        <div>
          <Link to="/top">
            <Button title="top" isActive ={page === 'top'}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonsBox;
