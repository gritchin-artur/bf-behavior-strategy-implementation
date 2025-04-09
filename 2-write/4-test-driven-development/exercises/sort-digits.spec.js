import { sortDigits } from './sort-digits.js';

describe('Creates a new number by sorting the digits in another', () => {
  it('2321 --> 1223', () => {
    expect(sortDigits(2321)).toEqual(1223);
  });
  it('2321, true --> 1223', () => {
    expect(sortDigits(2321, true)).toEqual(1223);
  });
  it('2321, false --> 3221', () => {
    expect(sortDigits(2321, false)).toEqual(3221);
  });
});
