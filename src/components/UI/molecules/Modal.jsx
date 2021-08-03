import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import menuImg from '../../../images/menu_bulb.svg'
import chatIcon from '../../../images/chat_icon_on.svg'
import notificationIcon from '../../../images/notification_icon_on.svg'



const useStyles = makeStyles({
  "@keyframes modal": {
    "0%": {
      opacity: '0.1',
    },
    "100%": {
      opacity: '1',
    }
  },
   mainModal: {
    width: '280px',
    height: '260px',
    boxShadow: '0 0 35px rgba(17, 17, 17, 0.25)',
    position: 'absolute',
    left: '44%',
    animationDuration: '2s',
    animationName: '$modal',
    animationFillMode: 'forwards',
    zIndex: '12',
  
    '& img': {
      opacity: '0.7',
      width: '100%',
      height: '100%'
    },
  },
  mainModalMenu: {
    position: 'absolute',
    zIndex: '345',
    top: '80px',
    left: '40px',

    '& p': {
      color: 'var(--white)',
      fontFamily: 'Calibri Light Italic',
      fontSize: '20px',
      fontWeight: '400',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      marginBottom: '30px',
      cursor: 'pointer',

      '&:nth-child(1)': {
        marginLeft: '10px',
      },
      '&:nth-child(2)': {
        marginLeft: '50px',
      },
      '&:nth-child(3)': {
        marginLeft: '50px',
      },

      '&:nth-child(2)::before': {
        content: `url('${chatIcon}')`,
        width: '24px',
        height: '20px',
        position: 'absolute',
        left: '10px',
      },

      '&:nth-child(3)::before': {
        content: `url('${notificationIcon}')`,
        width: '24px',
        height: '20px',
        position: 'absolute',
        left: '10px',
      }
    }
  }
})


const Modal = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.mainModal}>
      <img src={menuImg} alt="Menu" />
      <div className={classes.mainModalMenu}>
        <p>settings</p>
        <p>start chat</p>
        <p>Notification</p>
      </div>
    </div>
  )
};

export default Modal
