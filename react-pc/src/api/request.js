// 封装 Promise
export function request() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = 0;
      console.log("promise 构造函数异步执行", num);
      resolve(num);
    }, 0);
  });
}
