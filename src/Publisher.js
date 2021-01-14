class Publisher {
  constructor() {
    this._subsMap = {};
  }
  //消息订阅
  subscribe(type, cb) {
    if (this._subsMap[type]) {
      if (this._subsMap[type].includes(cb)) return;
      this._subsMap[type].push(cb);
    } else {
      this._subsMap[type] = [];
      this._subsMap[type].push(cb);
    }
  }
  //取消订阅
  unSubscribe(type, cb) {
    console.log(this._subsMap);
    if (!this._subsMap[type] || !this._subsMap[type].includes(cb)) return;
    let index = this._subsMap[type].indexOf(cb);
    this._subsMap[type].splice(index, 1);
  }
  //消息发布
  notify(type, ...payload) {
    if (!this._subsMap[type]) return;
    this._subsMap[type].forEach((item) => item(payload));
  }
}

const doctor = new Publisher();

doctor.subscribe("兵人", (message) => console.log("A君 " + message));
doctor.subscribe("兵人", (message) => console.log("B君 " + message));
doctor.subscribe("塑胶", (message) => console.log("C君 " + message));

doctor.notify("兵人", "SAS兵人到货啦~");
doctor.notify("塑胶", "最新塑胶到货啦~");
