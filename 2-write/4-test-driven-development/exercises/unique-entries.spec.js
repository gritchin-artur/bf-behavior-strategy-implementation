import { uniqueEntries } from './unique-entries.js';

describe('Finds all the unique numbers in an array and sorts them', () => {
  it('[3, 1, 3, 2] --> [1, 2, 3]', () => {
    expect(uniqueEntries([3, 1, 3, 2])).toEqual([1, 2, 3]);
  });
  it('[3, 1, 3, 2], true --> [1, 2, 3]', () => {
    expect(uniqueEntries([3, 1, 3, 2], true)).toEqual([1, 2, 3]);
  });
  it('[3, 1, 3, 2], false --> [3, 2, 1]', () => {
    expect(uniqueEntries([3, 1, 3, 2], false)).toEqual([3, 2, 1]);
  });
});
