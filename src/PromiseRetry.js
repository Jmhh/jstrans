/**
 * 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject
 * @param {function} promiseFn
 * @param {number} time
 */

export const promiseRetry = (promiseFn, time = 3) => {
  return new Promise(async (resolve, reject) => {
    while (time--) {
      try {
        let result = await promiseFn();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
  });
};
