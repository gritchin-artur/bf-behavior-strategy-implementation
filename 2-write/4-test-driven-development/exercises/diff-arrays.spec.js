import { diffArrays } from './diff-arrays.js';

describe('Returns an array containing only the items that are not in both a and b', () => {
  it('([2, 1], [1, 3]) --> [2, 3]', () => {
    expect(diffArrays([2, 1], [1, 3])).toEqual([2, 3]);
  });
  it('([2, NaN], [3, 2]) --> [NaN, 3]', () => {
    expect(diffArrays([2, NaN], [3, 2])).toEqual([NaN, 3]);
  });
  it('([2, 1], [1, 2]) --> []', () => {
    expect(diffArrays([2, 1], [1, 2])).toEqual([]);
  });
  it('([1, 2, 3], [4, 5]); // [1, 2, 3, 4, 5]', () => {
    expect(diffArrays([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
