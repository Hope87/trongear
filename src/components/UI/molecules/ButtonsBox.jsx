import React from 'react';
import { Link } from 'react-router-dom';
//import Button from '../../UI/atoms/Button';
import Button from '../atoms/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonsBox: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '@media screen and (max-width: 576px)': {
      marginRight: '15px',
      marginLeft: '15px',
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
  'button:not(:last-child)': {
    marginRight: '25px',
  },
});

const ButtonsBox = ({page}) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonsBox}>
      <div className={classes.buttonsBoxBtn}>
        <Link to="/about">
          <Button className={classes.button} title="about" isActive ={page === 'about'}/>
        </Link>
          <Link to="/garage">
            <Button className={classes.button} title="garage"  isActive ={page === 'garage'}/>
          </Link>
      </div>
      <div className={classes.buttonsBoxBtn}>
        <Link to="/racing">
          <Button className={classes.button} title="racing"  isActive ={page === 'racing'}/>
        </Link>
        <div>
          <Link to="/top">
            <Button className={classes.button} title="top" isActive ={page === 'top'}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonsBox;
