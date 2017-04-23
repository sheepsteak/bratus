import curry from './curry';

export default curry((fn, arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(fn(arr[i], i, arr));
  }

  return result;
});
