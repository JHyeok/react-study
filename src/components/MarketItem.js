import React from 'react';
import '../styles/MarketItem.css';

const MarketItem = ({ name, price, onPut }) => {
  return (
    <div className="MarketItem" onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  );
};

export default MarketItem;