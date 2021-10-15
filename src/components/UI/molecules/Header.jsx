import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import burger from '../../../images/burger.svg';
import useOutsideModal from '../../helpers/useOutsideModal';

const useStyles = makeStyles({
  mainHeader: {
    width: '100%',
    minHeight: '60px',
    backgroundColor: 'var(--dark)',
    position: 'relative',
    clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 97% 100%, 100% 100%, 3% 100%)',
    '@media screen and (max-width: 576px)': {
      boxShadow: '0px 9px 32px 0px rgba(5,5,5,0.57)',
      backgroundColor: '#000000',
      clipPath: 'none',
      minHeight: '82px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

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
      '@media screen and (max-width: 576px)': {
        position: 'static',
      },
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
    zIndex: '2',
    '@media screen and (max-width: 576px)': {
      position: 'static',
      transform: 'translate(0, 0)',
    },
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

    '@media screen and (max-width: 679.98px)': {
      display: 'none',
    },
  },
});

const Header = ({ headerModal, setHeaderModal, headerLogo }) => {
  const classes = useStyles();

  const modalRef = useRef(null);

  useOutsideModal(modalRef, setHeaderModal);

  return (
    <div className={classes.mainHeader} ref={modalRef}>
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
