import map from '../map';

describe('map', () => {
  it('returns a new array', () => {
    const identity = map(curr => curr);

    const initial = [1, 2, 3, 4, 5];
    const result = identity(initial);

    expect(result).not.toBe(initial);
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

    map(
      fnMock,
      initial,
    );

    expect(fnMock).toHaveBeenCalledTimes(5);
  });

  it('can be curried', () => {
    const sum = map(item => item + 1);

    expect(sum).toEqual(expect.any(Function));

    const initial = [1, 2, 3, 4, 5];
    const result = sum(initial);

    expect(result).toEqual([2, 3, 4, 5, 6]);
  });
});
