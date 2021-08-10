import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StatisticElement from '../molecules/StatisticElement';
import elements_12 from '../../../images/elements-12.svg';
import elements_13 from '../../../images/elements-13.svg';
import elements_14 from '../../../images/elements-14.svg';

const useStyles = makeStyles({
  statisticElementContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginLeft: '50px',
  },
});

const elementImgInlineStyle = {
  width: '53px !important',
  height: '16px !important',
};

const StatisticElementContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.statisticElementContainer}>
      <StatisticElement
        flagText="total invested"
        elementText="ROYALTIES"
        payout="000,000,000"
        elementImg={elements_13}
        textColorWhite
        color="var(--red)"
        appearance="red"
      />
      <StatisticElement
        flagText="income p/hour"
        elementText="Affiliate Payout"
        payout="000,000,000"
        elementImg={elements_13}
        color="var(--yellow)"
        appearance="yellow"
      />
      <StatisticElement
        flagText="total payed"
        elementText="ROYALTIES"
        payout="000,000,000"
        elementImg={elements_13}
        textColorWhite
        color="var(--red)"
        appearance="red"
      />
      <StatisticElement
        flagText="cars in the race"
        elementText="view top rasers"
        payout="000,000,000"
        hiddenImg
        color="var(--yellow)"
        appearance="yellow"
      />
      <StatisticElement
        flagText="total riders"
        elementText="viev all riders"
        payout="000,000,000"
        elementImg={elements_14}
        textColorWhite
        color="var(--red)"
        appearance="silver"
      />
      <StatisticElement
        flagText="current assets"
        elementText="view top rasers"
        hiddenText
        payout="000,000,000"
        elementImg={elements_13}
        color="var(--yellow)"
      />
      <StatisticElement
        flagText="total cars"
        elementText="view all cars"
        payout="000,000,000"
        elementImg={elements_12}
        textColorWhite
        elementImgStyle={elementImgInlineStyle}
        color="var(--red)"
        appearance="silver"
      />
      <StatisticElement
        flagText="outputs"
        elementText="view top rasers"
        hiddenText
        payout="000,000,000"
        hiddenImg
        color="var(--yellow)"
      />
    </div>
  );
};

export default StatisticElementContainer;
