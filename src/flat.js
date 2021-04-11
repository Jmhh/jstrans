/**
 * 扁平数组
 */
let arrayData = ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]]

//1.reduce方法
function flatDeep(arr) {
  return Array.isArray(arr)
    ? arr.reduce((acc, cur) => [...acc, ...flatDeep(cur)], [])
    : [arr];
}

//2.栈
function flattenDeep(arr) {
    const result = [] 
    // 将数组元素拷贝至栈，直接赋值会改变原数组
    const stack = [...arr]
    // 如果栈不为空，则循环遍历
    console.log(stack)
    while (stack.length !== 0) {
      const val = stack.pop() 
      if (Array.isArray(val)) {
        // 如果是数组再次入栈，并且展开了一层
        stack.push(...val) 
      } else {
        // 如果不是数组，就用头插法插入到结果数组中
        result.unshift(val)
      }
    }
    return result
  }

let test = flattenDeep(arrayData)
console.log(test)
