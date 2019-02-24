import React from 'react';
import MarketItem from './MarketItem';

const items = [
  {
    name: '컴퓨터',
    price: 5000
  },
  {
    name: 'LG그램',
    price: 4000
  },
  {
    name: '갤럭시S10',
    price: 3000
  },
  {
    name: '집',
    price: 8000
  }
];

const MarketItemList = () => {
  const itemList = items.map(item => <MarketItem {...item} key={item.name} />);
  return <div>{itemList}</div>;
};

export default MarketItemList;