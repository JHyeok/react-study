import { observable, action } from 'mobx';

export default class MobxCounterStore {
  @observable number = 0;

  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }
}