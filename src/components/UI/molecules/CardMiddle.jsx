import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import frameOn from '../../../images/frame_1_on.svg';
import frameOff from '../../../images/frame_1_off.svg';
import tuningPanel from '../../../images/tuning_panel_1.svg';
import lockIcon from '../../../images/lock_icon.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyles = makeStyles({
  cardMiddle: {
    maxWidth: '150px',
    height: '140px',
    position: 'relative',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',

      '&:nth-child(1)': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        zIndex: '2',
        position: 'relative',
      },

      '&:nth-child(2)': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '1',
      },

      '&:nth-child(3)': {
        maxWidth: '120px',
        height: '80px',
        objectFit: 'contain',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '3',
      },

      '&:nth-child(4)': {
        width: '24px',
        height: '26px',
        objectFit: 'contain',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '4',
      },
    },
  },
});

const CardMiddle = ({ image }) => {
  const [frame, setFrame] = useState(frameOff);

  const classes = useStyles();

  return (
    <div className={classes.cardMiddle}>
      <LazyLoadImage
        onMouseEnter={() => setFrame(frameOn)}
        onMouseOut={() => setFrame(frameOff)}
        src={frame}
        alt="frame"
      />
      <LazyLoadImage src={tuningPanel} alt="tuningPanel" />
      <LazyLoadImage src={image} alt={image} />
      <LazyLoadImage src={lockIcon} alt="lockIcon" />
    </div>
  );
};

export default CardMiddle;
