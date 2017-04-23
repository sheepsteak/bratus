export default (fn) => {
  const c = (...args1) => {
    if (args1.length < fn.length) {
      return (...args2) => c(...args1, ...args2);
    }

    return fn(...args1);
  };

  return c;
};
