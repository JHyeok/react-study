import React from 'react';
import MarketTemplate from './MarketTemplate';
import MarketItemList from './MarketItemList';
import BasketItemList from './BasketItemList';

const Market = () => {
  return (
  <MarketTemplate items={<MarketItemList />} basket={<BasketItemList />} />
  );
};

export default Market;