import reduce from '../reduce';

describe('reduce', () => {
  it('passes accumulator, value, index and array to function', () => {
    const initial = [1, 2, 3, 4, 5];
    let indexCount = 0;
    const fnMock = jest.fn((all, value, index, array) => {
      expect(all).toEqual(expect.any(Number));
      expect(index).toBe(indexCount);
      expect(array).toBe(initial);

      indexCount += 1;
      return all + value;
    });
    reduce(
      fnMock,
      0,
      initial,
    );

    expect(fnMock).toHaveBeenCalledTimes(5);
  });

  it('passes previous accumulator item to successive functions', () => {
    const initial = [1, 2, 3, 4, 5];
    const fnMock = jest.fn((all, value) => all + value);
    const result = reduce(
      fnMock,
      0,
      initial,
    );

    expect(result).toBe(15);
  });

  it('can be curried', () => {
    const increment1 = reduce((all, curr) => [...all, curr + 1]);

    expect(increment1).toEqual(expect.any(Function));

    const increment2 = increment1([]);

    expect(increment2).toEqual(expect.any(Function));

    const initial = [1, 2, 3, 4, 5];
    const result = increment2(initial);

    expect(result).toEqual([2, 3, 4, 5, 6]);
  });
});
