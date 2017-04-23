import compose from '../compose';

describe('compose', () => {
  it('calls functions in opposite order they were passed', () => {
    const first = jest.fn(f => `${f}1`);
    const second = jest.fn(f => `${f}2`);
    const third = jest.fn(() => '3');
    const identity = compose(
      first,
      second,
      third,
    );

    const result = identity();

    expect(result).toEqual('321');
  });

  it('passes on all arguments', () => {
    const first = jest.fn(f => `${f}1`);
    const second = jest.fn(f => `${f}2`);
    const third = jest.fn(f => `${f}3`);
    const identity = compose(
      first,
      second,
      third,
    );

    const result = identity('order: ');

    expect(result).toEqual('order: 321');
  });
});
