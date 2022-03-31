import { delay } from './helpers';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('delay function testing', () => {
  it('should return a Promise', () => {
    const result = delay();

    expect(result).toBeInstanceOf(Promise);
  });

  it('should wait 1 second by default before being resolved', () => {
    delay();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  it('should wait 5.5 seconds before being resolved', () => {
    delay(5500);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5500);
  });
});
