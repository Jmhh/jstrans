function debounce(fn, wait) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(...args);
    }, wait);
  };
}

function throttle(fn, wait) {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(...args);
      timer = null;
    }, wait);
  };
}
