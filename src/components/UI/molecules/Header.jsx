import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import header from '../../../images/icons/header.svg'
import burger from '../../../images/icons/burger.svg'



const useStyles = makeStyles({
   mainHeader: {
    maxWidth: '1920px',
    height: '60px',
    
    '& img': {
      width: '100%',
      height: '60px',
  
      '&:nth-child(2)': {
        width: '40px',
        height: '20px',
        position: 'absolute',
        top: '2%',
        left: '50%',
        cursor: 'pointer',
      }
    },
  
    '& h5': {
      textShadow: '0 6px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Russo One',
      fontSize: '18px',
      fontWeight: '400',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'center',
      textTransform: 'uppercase',
      position: 'absolute',
      top: '2%',
      right: '5%',
      cursor: 'pointer',
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
    }
  }
})

const Header = ({ headerModal, setHeaderModal, headerLogo }) => {
  const classes = useStyles()
  
  return (
    <div className={classes.mainHeader}>
      <img src={header} alt="header" />
      <img onClick={() => setHeaderModal(!headerModal)} src={burger} alt="burger" />
      <h5>eng</h5>
      {headerLogo && (
        <div className={classes.headerLogo}>
          <img src={headerLogo} alt="logo" />
        </div>
      )}
    </div>
  )
};

export default Header
