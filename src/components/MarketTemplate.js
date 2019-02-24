import React from 'React';
import './MarketTemplate.css';

const MarketTemplate = ({ items, basket }) => {
  return (
    <div className="MarketTemplate">
      <div className="items-wrapper">
        <h2>상품</h2>
        {items}
      </div>
      <div className="items=wrapper">
        <h2>장바구니</h2>
        {basket}
      </div>
    </div>
  )
}

export default MarketTemplate;
