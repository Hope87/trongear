import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import burger from '../../../images/burger.svg';

const useStyles = makeStyles({
  mainHeader: {
    width: '100%',
    minHeight: '60px',
    backgroundColor: 'var(--dark)',
    position: 'relative',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 97% 100%, 100% 100%, 3% 100%)',

    '& h5': {
      textShadow: '0 6px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Russo One',
      fontSize: '18px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'center',
      textTransform: 'uppercase',
      position: 'absolute',
      top: '30%',
      right: '5%',
      cursor: 'pointer',
    },
  },
  mainHeaderBurger: {
    width: '40px !important',
    height: '22px !important',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
  },
  headerLogo: {
    position: 'absolute',
    maxWidth: '282px',
    height: '60px',
    left: '2%',
    top: '0',
    zIndex: '2',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },
});

const Header = ({ headerModal, setHeaderModal, headerLogo }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainHeader}>
      <img
        className={classes.mainHeaderBurger}
        onClick={() => setHeaderModal(!headerModal)}
        src={burger}
        alt="burger"
      />
      <h5>eng</h5>
      {headerLogo && (
        <div className={classes.headerLogo}>
          <Link to="/">
            <img src={headerLogo} alt="logo" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
