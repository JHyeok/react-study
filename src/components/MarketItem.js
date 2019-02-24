import React from 'react';
import '../MarketItem.css';

const MarketItem = ({ name, price }) => {
  return (
    <div className="MarketItem">
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  );
};

export default MarketItem;