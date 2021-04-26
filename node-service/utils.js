const createParams = (res, code, msg) => {
  // console.log('res>>>>>>>>>:',res)
  let params = {
    code: code || 2000,
    data: res || [],
    msg: msg || "Success",
    timestamp: new Date().getTime(),
  };

  return params;
};

module.exports = { createParams };
