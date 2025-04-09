import { timeInMilliseconds } from './time-in-milliseconds.js';

describe('Converts the time from hours/minutes/second to milliseconds', () => {
  it('0, 0, 0 --> 0', () => {
    expect(timeInMilliseconds(0, 0, 0)).toEqual(0);
  });
  it('0, 0, 1 --> 1000', () => {
    expect(timeInMilliseconds(0, 0, 1)).toEqual(1000);
  });
  it('0, 1, 1 --> 61000', () => {
    expect(timeInMilliseconds(0, 1, 1)).toEqual(61000);
  });
  it('1, 1, 1 --> 3661000', () => {
    expect(timeInMilliseconds(1, 1, 1)).toEqual(3661000);
  });
});
