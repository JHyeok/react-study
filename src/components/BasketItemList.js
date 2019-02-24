import React from 'react';
import BasketItem from './BasketItem';

const BasketItemList = () => {
  return (
    <div>
      <BasketItem name="컴퓨터" price={5000} count={1} />
      <BasketItem name="LG그램" price={4000} count={1} />
      <hr />
      <p>
        <b>총합: </b> 9000원
      </p>
    </div>
  );
};

export default BasketItemList;