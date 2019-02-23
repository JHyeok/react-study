import React, { Component } from 'react';
// eslint-disable-next-line
// import { decorate, observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

/*
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

export default MobxCounter;
*/

/* inject 로 stores/mobxCounter 주입 */
// @inject('mobxCounter')
/* 특정 값이나 함수만 넣어주고 싶다면 */
@inject(stores => ({
  number: stores.mobxCounter.number,
  increase: stores.mobxCounter.increase,
  decrease: stores.mobxCounter.decrease,
}))
@observer
class MobxCounter extends Component {
  render () {
    // const { mobxCounter } = this.props;
    // return (
    //   <div>
    //     <h1>{mobxCounter.number}</h1>
    //     <button onClick={mobxCounter.increase}>+1</button>
    //     <button onClick={mobxCounter.decrease}>-1</button>
    //   </div>
    /* 특정 값이나 함수만 넣어주고 싶다면 */
    const { number, increase, decrease } = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    )
  }
}

export default MobxCounter;