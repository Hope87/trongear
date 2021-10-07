import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import menuImg from '../../../images/menu_bulb.svg';
// import chatOff from '../../../images/chat_icon_off.svg';
// import settingsOff from '../../../images/settings_off.svg';
// import notificationOff from '../../../images/notification_icon_off.svg';
import chatOn from '../../../images/chat_icon_on.svg';
import settingsOn from '../../../images/settings_on.svg';
import notificationOn from '../../../images/notification_icon_on.svg';

const Modal = () => {
  // const [settingIcon, setSettingIcon] = useState(settingsOff);
  // const [chatIcon, setChatIcon] = useState(chatOff);
  // const [notificationIcon, setNotificationOnIcon] = useState(notificationOff);

  const useStyles = makeStyles({
    '@keyframes modal': {
      '0%': {
        opacity: '0.1',
      },
      '100%': {
        opacity: '1',
      },
    },
    mainModal: {
      width: '280px',
      height: '260px',
      boxShadow: '0 0 35px rgba(17, 17, 17, 0.25)',
      position: 'absolute',
      left: '50%',
      //top: '18%',
      top: '20px',
      transform: 'translate(-50%, 0)',
      animationDuration: '2s',
      animationName: '$modal',
      animationFillMode: 'forwards',
      zIndex: '12',
      '@media screen and (max-width: 576px)': {
        top: '100px',
      },

      '& img': {
        opacity: '0.7',
        width: '100%',
        height: '100%',
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
          marginLeft: '50px',
        },
        '&:nth-child(2)': {
          marginLeft: '50px',
        },
        '&:nth-child(3)': {
          marginLeft: '50px',
        },

        '&:nth-child(1)::before': {
          content: `url('${settingsOn}')`,
          width: '24px',
          height: '20px',
          position: 'absolute',
          left: '10px',
        },

        '&:nth-child(2)::before': {
          content: `url('${chatOn}')`,
          width: '24px',
          height: '20px',
          position: 'absolute',
          left: '10px',
        },

        '&:nth-child(3)::before': {
          content: `url('${notificationOn}')`,
          width: '24px',
          height: '20px',
          position: 'absolute',
          left: '10px',
        },
      },
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.mainModal}>
      <img src={menuImg} alt="Menu" />
      <div className={classes.mainModalMenu}>
        <p>settings</p>
        <p>start chat</p>
        <p>Notification</p>
      </div>
    </div>
  );
};

export default Modal;
