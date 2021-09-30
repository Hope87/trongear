import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import burger from '../../../images/burger.svg';
import useOutsideModal from '../../helpers/useOutsideModal';
import headerLogo from '../../../images/logoForMobile.png';
import clockLink from '../../../images/clockLinkForMob.png';
import bellLink from '../../../images/bellLinkForMob.png';

const useStyles = makeStyles({
  mainHeader: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '149px',
    backgroundColor: '#000000',
    justifyContent: 'space-around',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },

  headerLogo: {
    alignSelf: 'center',
    width: '305px',
    height: '34px',
  },

  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  mainHeaderBurger: {
    width: '42px',
    height: '22px',
    cursor: 'pointer',
  },

  headerLinks: {
    display: 'flex',
  },

  clock: {
    width: '26px',
    height: '26px',
    marginRight: '38px',
  },

  bell: {
    width: '20px',
    height: '26px',
  }
});

const HeaderForMobile = ({ headerModal, setHeaderModal}) => {
  const classes = useStyles();

  const modalRef = useRef(null);

  useOutsideModal(modalRef, setHeaderModal);

  return (
    <div className={classes.mainHeader} ref={modalRef}>
      <div className={classes.headerLogo}>
          <Link to="/">
            <img src={headerLogo} alt="logo" />
          </Link>
      </div>
      <div className={classes.navbar}>
        <div className={classes.mainHeaderBurger}
             onClick={() => setHeaderModal(!headerModal)}>
          <img src={burger} alt="burger"/>
        </div>
        <div className={classes.headerLinks}>
          <div className={classes.clock}>
            <a href="#">
              <img src={clockLink} alt="clock"/>
            </a>
          </div>
          <div className={classes.bell}>
            <a href="#">
              <img src={bellLink} alt="bell"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderForMobile;
