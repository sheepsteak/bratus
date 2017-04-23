import filter from '../filter';

describe('filter', () => {
  it('returns items that pass predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = filter(curr => curr % 2, arr);

    expect(result).toEqual([1, 3, 5]);
  });

  it('passes each value, index and array to function', () => {
    const initial = [1, 2, 3, 4, 5];
    let indexCount = 0;
    const fnMock = jest.fn((value, index, array) => {
      expect(value).toBe(initial[index]);
      expect(index).toBe(indexCount);
      expect(array).toBe(initial);

      indexCount += 1;
      return value;
    });

    filter(
      fnMock,
      initial,
    );

    expect(fnMock).toHaveBeenCalledTimes(5);
  });

  it('can be curried', () => {
    const isOdd = filter(curr => curr % 2);

    expect(isOdd).toEqual(expect.any(Function));

    const arr = [1, 2, 3, 4, 5];
    const result = isOdd(arr);

    expect(result).toEqual([1, 3, 5]);
  });
});
