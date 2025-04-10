/**
 * Returns an array containing only the items that are not in both a and b.
 *  This is a pure function with no side-effects.
 *
 * @param {number[]} [a=[]] - One of the two arrays.
 * @param {number[]} [b=[]] - The other array.
 * @returns {number[]} A new array with items not in both a and b.
 *
 * @example
 *
 * diffArrays([1, 2], [1, 3]); // [2, 3]
 *
 * @example
 *
 * diffArrays([2, NaN], [3, 2]); // [NaN, 3]
 *
 * @example
 *
 * diffArrays([2, 1], [1, 2]); // []
 * @example
 *
 * diffArrays([1, 2, 3], [4, 5]); // [1, 2, 3, 4, 5]
 */
export const diffArrays = (a = [], b = []) => {
  const newArr = [];

  a.forEach((item1) => {
    if (!b.includes(item1)) {
      newArr.push(item1);
    }
  });

  b.forEach((item2) => {
    if (!a.includes(item2) && !newArr.includes(item2)) {
      newArr.push(item2);
    }
  });
  console.log(newArr);
  return newArr;
};
