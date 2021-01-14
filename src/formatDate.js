/**
 * Date.now()
 * @param {date}  日期参数
 */
function formatDate(dateParam) {
  let date = null
  if (!dateParam) {
    date = new Date()
  } else {
    date = new Date(dateParam)
  }
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${year}年${month.toString().padStart(2, 0)}月${day
    .toString()
    .padStart(2, 0)}日`;
}

let test = formatDate();
let test1 = formatDate('2020-12-08');
console.log(test,test1);