// #todo

'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  describe(
    solution.name + ': removes all odd numbers from an array of numbers',
    () => {
      describe('removes all odd numbers', () => {
        it('[1, 2, 3, 4] --> [2, 4]', () => {
          expect(solution([1, 2, 3, 4])).toEqual([2, 4]);
        });
        it('[100, 55, 33, 44] --> [100, 44]', () => {
          expect(solution([100, 55, 33, 44])).toEqual([100, 44]);
        });
      });

      describe('default parameters', () => {
        it('empty array', () => {
          expect(solution([])).toEqual([]);
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
