import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import beforeIcon_1 from '../../../images/elements-13.svg';

const useStyles = makeStyles({
  transactions: {
    width: '240px',
    height: '260px',
    background: 'var(--gray-dark)',
    clipPath: 'polygon(0% 14%, 14% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
  },

  transactionsHeader: {
    height: '12%',
    background: 'var(--red)',
    clipPath: 'polygon(28% 0%, 0% 0%, 100% 0%, 100% 100%, 100% 100%, 40% 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& h3': {
      textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Calibri',
      fontSize: '14px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'center',
      textTransform: 'uppercase',
      marginLeft: '80px',
    },
  },

  transactionsText: {
    padding: '30px',

    '& p': {
      color: 'var(--white)',
      fontFamily: 'Calibri',
      fontSize: '12px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
  },

  transactionsTextPurchased: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '60px',

    '& p': {
      color: 'var(--white)',
      fontFamily: 'Russo One',
      fontSize: '12px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },

    '& span': {
      textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Chakra Petch',
      fontSize: '24px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      position: 'relative',

      '&::before': {
        content: `url('${beforeIcon_1}')`,
        position: 'absolute',
        right: '20px',
        width: '20px',
        height: '20px',
      },
    },
  },

  transactionsTextTimeAgo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',

    '& p': {
      color: 'var(--white)',
      fontFamily: 'Calibri',
      fontSize: '12px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },

    '& span': {
      textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--white)',
      fontFamily: 'Chakra Petch',
      fontSize: '12px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
      position: 'relative',

      '&::before': {
        content: `url('${beforeIcon_1}')`,
        position: 'absolute',
        right: '20px',
        width: '10px',
        height: '10px',
      },
    },
  },

  transactionsContainer: {
    height: '85%',
    background: 'var(--secondary)',
    opacity: '0.8',
    clipPath: 'polygon(0% 32%, 28% 0%, 100% 0%, 100% 85%, 100% 100%, 0% 100%)',
  },
  transactionsFooter: {
    maxWidth: '240px',
    height: '40px',
    background: 'var(--dark)',
    paddingLeft: '30px',

    '& p': {
      textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--silver)',
      fontFamily: 'Chakra Petch',
      fontSize: '14px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },

    '& span': {
      textShadow: '4px 5px 13px rgba(18, 18, 18, 0.08)',
      color: 'var(--silver)',
      fontFamily: 'Calibri',
      fontSize: '9px',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
  },
});

const TransactionsCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.transactions}>
      <div className={classes.transactionsContainer}>
        <div className={classes.transactionsHeader}>
          <h3>transactions</h3>
        </div>

        <div className={classes.transactionsText}>
          <p>name</p>

          <div className={classes.transactionsTextPurchased}>
            <p>PURCHASED</p>
            <span>4</span>
          </div>

          <div className={classes.transactionsTextTimeAgo}>
            <p>1 HOUR AGO</p>
            <span>25</span>
          </div>
        </div>
      </div>
      <div className={classes.transactionsFooter}>
        <p>+ 0 TRX</p>
        <span>Affiliate Payout</span>
      </div>
    </div>
  );
};

export default TransactionsCard;
