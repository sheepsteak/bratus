import curry from './curry';

export default curry((fn, arr) => {
  const all = [];

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    const result = fn(item, i, arr);

    if (result) {
      all.push(item);
    }
  }

  return all;
});
