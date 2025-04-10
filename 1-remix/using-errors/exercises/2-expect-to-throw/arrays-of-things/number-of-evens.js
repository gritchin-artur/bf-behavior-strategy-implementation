// #todo

// you can use this to check the argument
import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns
 */
export const numberOfEvens = (numbers = []) => {
if (numbers.length === 0) {
    return 0;
    };

    numbers.forEach((num) => {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new TypeError();
        }
    });
    const newArr = [];
    numbers.forEach((num) => {
        if (num % 2 === 0) {
            newArr.push(num);
        }
    });
    return newArr.length;
};
