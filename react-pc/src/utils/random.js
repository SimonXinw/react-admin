// 小写26字母
function lowerCaseArr() {
  var letter = [];
  for (var i = 97; i <= 122; i++) {
    letter.push(String.fromCharCode(i));
  }
  return letter;
}

// 大写26字母
function upperCaseArr() {
  var letter = [];
  for (var i = 65; i <= 90; i++) {
    letter.push(String.fromCharCode(i));
  }
  return letter;
}
// 0-9 数字
function numberArr() {
  var numberArr = [];
  for (var i = 0; i <= 9; i++) {
    numberArr.push(i);
  }
  return numberArr;
}

// 随机数 指定数组，指定个数
export function limitNumber(num = 0, arr = []) {
  var str = "";
  for (var j = 0; j < num; j++) {
    str += arr[Math.floor(Math.random() * arr.length)];
  }

  return str;
}

// 随机数字 0-9 指定个数
export function randomNumberArr(num = 0) {
  var arr = numberArr();
  var str = limitNumber(num, arr);

  return str;
}

// 随机小写字母 指定个数
export function randomLowerCase(num = 0) {
  var arr = lowerCaseArr();
  var str = limitNumber(num, arr);

  return str;
}

// 随机大写字母 指定个数
export function randomUpperCase(num = 0) {
  var arr = upperCaseArr();
  var str = limitNumber(num, arr);

  return str;
}

// 随机混合大小写字母
export function mixLetter(num = 0) {
  var arr = [];
  // 数组拼接
  arr = arr.concat(lowerCaseArr());
  arr = arr.concat(upperCaseArr());
  // 字符串 拼接
  var str = limitNumber(num, arr) || "";

  return str;
}
