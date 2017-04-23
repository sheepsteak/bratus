import tail from '../tail';

describe('tail', () => {
  it('returns all but the first item in array', () => {
    const result = tail([1, 2, 3, 4, 5]);

    expect(result).toEqual([2, 3, 4, 5]);
  });

  it('returns all but the first character in string', () => {
    const result = tail('numbers');

    expect(result).toEqual('umbers');
  });

  it('returns empty array if no items in array', () => {
    const result = tail([]);

    expect(result).toEqual([]);
  });

  it('returns empty string if no items in string', () => {
    const result = tail('');

    expect(result).toEqual('');
  });

  it('returns empty array if no array passed', () => {
    const result = tail();

    expect(result).toEqual([]);
  });

  it('returns empty array if nothing passed', () => {
    const result = tail();

    expect(result).toEqual([]);
  });
});
