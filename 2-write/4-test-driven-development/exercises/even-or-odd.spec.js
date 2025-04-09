import { evenOrOdd } from './even-or-odd.js';

describe('Determines if each number in an array is even or odd', () => {
  it("[1, 2] --> ['odd', 'even']", () => {
    expect(evenOrOdd([1, 2])).toEqual(['odd', 'even']);
  });
  it("[3, 4] --> ['odd', 'even']", () => {
    expect(evenOrOdd([3, 4])).toEqual(['odd', 'even']);
  });
  it("[21, 42] --> ['odd', 'even']", () => {
    expect(evenOrOdd([21, 42])).toEqual(['odd', 'even']);
  });
  it("[2, 4, 6, 8, 10] --> ['even', 'even', 'even', 'even', 'even']", () => {
    expect(evenOrOdd([2, 4, 6, 8, 10])).toEqual([
      'even',
      'even',
      'even',
      'even',
      'even',
    ]);
  });
});
