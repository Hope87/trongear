import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StatisticElement from '../molecules/StatisticElement';
import elements_13 from '../../../images/elements-13.svg';
import elements_14 from '../../../images/elements-14.svg';

const useStyles = makeStyles({
  statisticElementContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginLeft: '60px',
  },
});

const statisticElementArr = [
  {
    id: 1,
    flagText: 'total invested',
    elementText: 'ROYALTIES',
    payout: '000,000,000',
    elementImg: elements_13,
    textColorWhite: true,
    hiddenText: false,
    hiddenImg: false,
    color: 'var(--red)',
    appearance: 'red',
  },
  {
    id: 2,
    flagText: 'income p/hour',
    elementText: 'Affiliate Payout',
    payout: '000,000,000',
    elementImg: elements_13,
    textColorWhite: false,
    hiddenText: false,
    hiddenImg: false,
    color: 'var(--yellow)',
    appearance: 'yellow',
  },
  {
    id: 3,
    flagText: 'total payed',
    elementText: 'ROYALTIES',
    payout: '000,000,000',
    elementImg: elements_13,
    textColorWhite: true,
    hiddenText: false,
    hiddenImg: false,
    color: 'var(--red)',
    appearance: 'red',
  },
  {
    id: 4,
    flagText: 'cars in the race',
    elementText: 'view top rasers',
    payout: '000,000,000',
    elementImg: '',
    textColorWhite: false,
    hiddenText: false,
    hiddenImg: true,
    color: 'var(--yellow)',
    appearance: 'yellow',
  },
  {
    id: 5,
    flagText: 'total riders',
    elementText: 'viev all riders',
    payout: '000,000,000',
    elementImg: elements_14,
    textColorWhite: true,
    hiddenText: false,
    hiddenImg: false,
    color: 'var(--red)',
    appearance: 'silver',
  },
  {
    id: 6,
    flagText: 'current assets',
    elementText: 'view top rasers',
    payout: '000,000,000',
    elementImg: elements_13,
    textColorWhite: false,
    hiddenText: true,
    hiddenImg: false,
    color: 'var(--yellow)',
    appearance: '',
  },
  {
    id: 7,
    flagText: 'total cars',
    elementText: 'view all cars',
    payout: '000,000,000',
    elementImg: elements_13,
    textColorWhite: true,
    hiddenText: false,
    hiddenImg: false,
    color: 'var(--red)',
    appearance: 'silver',
  },
  {
    id: 8,
    flagText: 'outputs',
    elementText: 'view top rasers',
    payout: '000,000,000',
    elementImg: '',
    textColorWhite: false,
    hiddenText: true,
    hiddenImg: true,
    color: 'var(--yellow)',
    appearance: '',
  },
];

const StatisticElementContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.statisticElementContainer}>
      {statisticElementArr.map((el) => (
        <StatisticElement
          key={el.id}
          flagText={el.flagText}
          elementText={el.elementText}
          payout={el.payout}
          elementImg={el.elementImg}
          textColorWhite={el.textColorWhite}
          hiddenText={el.hiddenText}
          hiddenImg={el.hiddenImg}
          color={el.color}
          appearance={el.appearance}
        />
      ))}
    </div>
  );
};

export default StatisticElementContainer;
