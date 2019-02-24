import React from 'react';
import MarketTemplate from './MarketTemplate';
import MarketItemList from './MarketItemList';
import BasketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

const Market = () => {
  return (
  <MarketTemplate
    items={<MarketItemList />}
    basket={<BasketItemList />}
    total={<TotalPrice />}
  />
  );
};

export default Market;