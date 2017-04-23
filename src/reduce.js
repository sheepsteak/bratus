import curry from './curry';

export default curry((fn, acc, arr) => {
  let result = acc;

  for (let i = 0; i < arr.length; i += 1) {
    result = fn(result, arr[i], i, arr);
  }

  return result;
});
