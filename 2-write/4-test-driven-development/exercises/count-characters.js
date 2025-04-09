/**
 * Counts how many times each character appears in a string.
 *
 * @param {string} [text=''] - The string of characters to count.
 * @returns {number{}} An object of key/value pairs counting each character.
 *
 * @example
 *
 * countCharacters('hi'); // { h: 1, i: 1 }
 *
 * @example
 *
 * countCharacters('hiiii'); // { h: 1, i: 4 }
 *
 */
export const countCharacters = (text = '') => {
  const output = {};
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (output[char] === undefined) {
      output[char] = 1;
    } else {
      output[char] += 1;
    }
  }

  return output;
};
