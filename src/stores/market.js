import { observable, action, computed } from 'mobx';

export default class MarketStore {
  @observable selectedItems = [];

  constructor(root) {
    this.root = root;
  }

  @action
  put = (name, price) => {
    const { number } = this.root.mobxCounter;
    const itemExists = this.selectedItems.find(item => item.name === name);
    if (!itemExists) {
      this.selectedItems.push({
        name,
        price,
        count: number
      });
      return;
    }
    itemExists.count += number;
  };

  @action
  take = name => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake);
    }
  };

  @computed
  get total() {
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
};