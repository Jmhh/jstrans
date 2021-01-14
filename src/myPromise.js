// 依据规范生成初始版本
class NewPromise {
    constructor (executor) {
      // 存在三种状态
      this.enumStatus = {
        PADDING: 'padding',
        FULFILLED: 'fulfilled',
        REJECTED: 'rejected'
      };
      // 初始态为等待态
      this.state = this.enumStatus.PADDING;
      // 必须存在一个终值
      this.value = '';
      // 必须存在一个被拒绝的原因
      this.reason = '';
      // 转化执行态
      let resolve = (value) => {
        // 修改状态
        this.state = this.enumStatus.FULFILLED;
        // 必须有一个终值
        this.value = value;
      };
      // 转化失败态
      let reject = (reason) => {
        // 修改状态
        this.state = this.enumStatus.REJECTED;
        // 如果是失败态，必须有一个据因
        this.reason = reason;
      };
      // 如果executor执行报错，直接执行reject
      try {
        executor(resolve, reject);
      } catch (err) {
        reject(err);
      }
    }
    // 必须包含then方法
    then (onFulfilled, onRejected) {
      // 保证onFulfilled和onRejected都是函数类型
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
          onRejected = typeof onRejected === 'function' ? onRejected : err => { Throw(err) };
      // 如果当前状态为执行态，则执行onFulfilled函数，将终值作为该函数的参数，否则忽略其
      if (this.state === this.enumStatus.FULFILLED) {
        onFulfilled(this.value);
      }
      // 如果当前状态为拒绝态，则执行onRejected函数，将据因作为该函数的参数，否则忽略其
      if (this.state === this.enumStatus.REJECTED) {
        onRejected(this.reason);
      }
    }
  }
  
export default Mypromise