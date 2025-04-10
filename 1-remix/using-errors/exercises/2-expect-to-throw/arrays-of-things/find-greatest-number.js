// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers';

/**
 *
 * @param {*} numbers
 * @returns
 */
export const findGreatestNumber = (numbers = []) => {
  // return numbers.find((a, b) => a > b)
if (numbers.length === 0) {
    return undefined;
  }
numbers.forEach((num) => {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new TypeError();
    }
  })

  return numbers.reduce((max, current) => (current > max ? current : max));
};