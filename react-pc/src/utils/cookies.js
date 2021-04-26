// 4. 删除左右两端的空格
export function trim(str) {
  console.log(str.replace(/(^\s*)|(\s*$)/g, ""));
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 1.设置 cookies
export function setCookie(key, value, t) {
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + t);
  document.cookie =
    key + "=" + JSON.stringify(value) + ";expires=" + oDate.toUTCString();
  if (getCookie(key)) {
    console.log("设置成功");
  } else {
    console.log("设置失败");
  }
}
// 2.读取 cookies
export function getCookie(key) {
  var str = document.cookie.replace(/;\s*/, ";");
  var cookieArr = str.split(";");
  var cookieObj = {};
  var len = cookieArr.length;
  for (var i = 0; i < len; i++) {
    var item = cookieArr[i];
    var k = item.split("=")[0];
    var v = item.split("=")[1];
    cookieObj[k] = v;
  }
  if (cookieObj[key]) {
    return JSON.parse(cookieObj[key])
  } else {
    return false;
  }
}
// 3.删除 cookies
export function removeCookie(key) {
  document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  if (!getCookie(key)) {
    alert("删除成功");
  } else {
    alert("删除失败");
  }
}
