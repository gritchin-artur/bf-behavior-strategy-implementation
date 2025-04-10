// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
export const findSmallestNumber = (numbers = []) => {
if (numbers.length === 0) {
    return undefined;
  }
numbers.forEach((num) => {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new TypeError();
    }
  })

  return numbers.reduce((max, current) => (current < max ? current : max));
};
