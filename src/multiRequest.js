/**
 * 实现并发请求控制
 */

function multiRequest(urls = [], maxNum) {
    // 请求总数量
    const len = urls.length;
    // 根据请求数量创建一个数组来保存请求的结果
    const result = new Array(len).fill(false);
    // 当前完成的数量
    let count = 0;
  
    return new Promise((resolve, reject) => {
      // 请求maxNum个
      while (count < maxNum) {
        next();
      }
      function next() {
        let current = count++;
        // 处理边界条件
        if (current >= len) {
          // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
          !result.includes(false) && resolve(result);
          return;
        }
        const url = urls[current];
        console.log(`开始 ${current}`, new Date().toLocaleString());
        fetch(url)
          .then((res) => {
            // 保存请求结果
            result[current] = res;
            console.log(`完成 ${current}`, new Date().toLocaleString());
            // 请求没有全部完成, 就递归
            if (current < len) {
              next();
            }
          })
          .catch((err) => {
            console.log(`结束 ${current}`, new Date().toLocaleString());
            result[current] = err;
            // 请求没有全部完成, 就递归
            if (current < len) {
              next();
            }
          });
      }
    });
  }
  

const urls = [
  "https://img-cdn-tc.dcloud.net.cn/uploads/avatar/001/20/01/83_avatar_max.jpg",
  "https://img-cdn-tc.dcloud.net.cn/uploads/avatar/000/81/86/85_avatar_max.jpg",
  "https://img-cdn-tc.dcloud.net.cn/uploads/avatar/000/09/75/97_avatar_max.jpg",
  "https://img-cdn-tc.dcloud.net.cn/uploads/avatar/000/03/30/21_avatar_max.jpg",
  "https://img-cdn-tc.dcloud.net.cn/uploads/avatar/000/28/79/01_avatar_max.jpg",
  "https://img-cdn-tc.dcloud.net.cn/uploads/avatar/000/15/95/31_avatar_max.jpg",
  "https://img-cdn-tc.dcloud.net.cn/uploads/avatar/000/08/81/38_avatar_max.jpg",
];

multiRequest(urls,2).then((res) => {
  console.log("结果 " + res);
});
