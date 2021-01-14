/**
 * 防抖函数 /重点在于单位时间内再次触发就将timer清零，重新计算
 * @param {function} fn
 * @param {number} wait
 */
function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(args);
    }, wait);
  };
}

/**
 * 节流函数 重点在于单位时间内只会触发一次，触发完后将timer清零，重走流程
 * @param {function} fn
 * @param {number} wait
 */

function throttle(fn, wait) {
  let timer;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(args);
      timer = null;
    }, wait);
  };
}
