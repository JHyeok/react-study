import React, { Component } from 'react';
// eslint-disable-next-line
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class MobxCounter extends Component {
  @observable number = 0;

  @action
  increase = () => {
    this.number++;
  }

  @action
  decrease = () => {
    this.number--;
  }

  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

// Decorator 를 함께 사용하면 아래의 코드는 더 이상 필요없음.
// @observer, @observable, @action 을 어노테이션 사용하는 것처럼 붙여주면 됨.
// decorate(MobxCounter, {
//   number: observable,
//   increase: action,
//   decrease: action
// })

// export default observer(MobxCounter);
export default MobxCounter;