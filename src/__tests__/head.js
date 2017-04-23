import head from '../head';

describe('head', () => {
  it('returns the first item in array', () => {
    const result = head([1, 2, 3, 4, 5]);

    expect(result).toBe(1);
  });

  it('returns undefined if no first item', () => {
    const result = head([]);

    expect(result).toBe(undefined);
  });

  it('returns undefined if no array passed', () => {
    const result = head();

    expect(result).toBe(undefined);
  });
});
