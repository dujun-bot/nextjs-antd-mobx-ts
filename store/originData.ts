import { observable, action, makeAutoObservable } from 'mobx';

class OriginData {
  constructor() {
    makeAutoObservable(this);
  }
  count = 0;

  @action addCount() {
    return this.count++;
  }
}

export default OriginData;
