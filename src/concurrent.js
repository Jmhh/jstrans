/**
 * JavaScript 实现并发控制
 */

const task = (timeout) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(timeout);
    }, timeout)
  );

const taskList = [1000, 3000, 200, 1300, 800, 2000];

async function startNoConcurrentControl() {
  console.time();
  await Promise.all(taskList.map((item) => task(item)));
  console.timeEnd();
}

startNoConcurrentControl();
