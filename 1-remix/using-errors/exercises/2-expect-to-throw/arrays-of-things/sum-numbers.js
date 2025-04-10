// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
export const sumNumbers = (numbers = []) => {
    numbers.forEach((num) => {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new TypeError();
        }
    });

    return numbers.reduce((acc, num) => acc + num, 0);
};
