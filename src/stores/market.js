import { observable, action, computed } from "mobx";

export default class MarketStore {
  @observable selectedItems = [];

  @action
  put = (name, price) => {
    const itemExists = this.selectedItems.find(item => item.name === name);
    if (!itemExists) {
      this.selectedItems.push({
        name,
        price,
        count: 1
      });
      return;
    }
    itemExists.count++;
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