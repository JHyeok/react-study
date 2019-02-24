import MarketStore from './market';
import MobxCounterStore from './mobxCounter';

class RootStore {
  constructor() {
    this.market = new MarketStore(this);
    this.mobxCounter = new MobxCounterStore(this);
  };
};

export default RootStore;