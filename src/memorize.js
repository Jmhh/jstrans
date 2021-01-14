/**
 * 运用闭包写缓存
 * @param {function} fn
 */

function memorize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    return cache[key] || (cache[key] = fn.apply(fn, args));
  };
}

function add(a) {
  return a + 1;
}

const adder = memorize(add);
adder(1);
adder(1);
console.log(adder);
