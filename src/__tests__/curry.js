import curry from '../curry';

describe('curry', () => {
  it('curries a function one argument at a time', () => {
    const add = (a, b) => a + b;

    const result = curry(add)(1)(2);

    expect(result).toBe(3);
  });

  it('curries a function all arguments at once', () => {
    const add = (a, b, c) => a + b + c;

    const result = curry(add)(1, 2, 3);

    expect(result).toBe(6);
  });
});
