import React from 'react';
import '../styles/MarketTemplate.css'

const MarketTemplate = ({ items, basket, total }) => {
  return (
    <div className="MarketTemplate">
      <div className="items-wrapper">
        <h2>상품</h2>
        {items}
      </div>
      <div className="items-wrapper">
        <h2>장바구니</h2>
        {basket}
        {total}
      </div>
    </div>
  );
};

export default MarketTemplate;
