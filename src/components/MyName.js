import React from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  )
};

MyName.defaultProps = {
  name: '리액트'
};

export default MyName;