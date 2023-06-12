export const successResponseWrap = (data: unknown) => {
  return {
    data,
    status: 'ok',
    msg: '请求成功',
    code: 0,
  };
};

export const failResponseWrap = (data: unknown, msg: string, code = 5000) => {
  return {
    data,
    status: 'fail',
    msg,
    code,
  };
};
