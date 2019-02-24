import React from 'react';
import MarketItem from './MarketItem';
import { inject, observer } from 'mobx-react';

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

const MarketItemList = ({ onPut }) => {
  const itemList = items.map(item => <MarketItem {...item} key={item.name} onPut={onPut}/>);
  return <div>{itemList}</div>;
};

export default inject(({ market }) => ({
  onPut: market.put,
}))(observer(MarketItemList));