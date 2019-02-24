import React from 'react';
import MarketTemplate from './MarketTemplate';
import MarketItemList from './MarketItemList';

const Market = () => {
  return (
  <MarketTemplate items={<MarketItemList />} basket={null} />
  );
};

export default Market;