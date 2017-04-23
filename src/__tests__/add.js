import add from '../add';

describe('add', () => {
  it('adds two numbers together', () => {
    const result = add(1, 2);

    expect(result).toBe(3);
  });

  it('can be curried', () => {
    const add1 = add(1);

    const result = add1(10);

    expect(result).toBe(11);
  });
});
