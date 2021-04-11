/**
 * 数组去重
 */
let arr = [1, 2, 2, 3]
 function unique(arr) {
     //1.new set()
     return [...new Set(arr)]
     //2.filter
    // return arr.filter((item,index, arr) => {
    //    return arr.indexOf(item) === index
    // })
 }

 console.log(unique(arr))