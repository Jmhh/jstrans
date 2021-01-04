/**
 * 函数柯里化
 * @param {function} fn
 * @param  {...any} rest1
 */
function currying(fn, ...rest1) {
  return function (...rest2) {
    fn.apply(null, rest1.concat(rest2));
  };
}

function sayHello(name, age, fruit) {
  console.log(`我是${name},今年${age}岁，喜欢吃${fruit}`);
}

const curryingJmhh = currying(sayHello, "Jmhh", 25);
curryingJmhh("cake");
