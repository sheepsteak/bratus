export default (...fns) => (val) => {
  let result = val;

  for (let i = fns.length - 1; i >= 0; i -= 1) {
    result = fns[i](result);
  }

  return result;
};
