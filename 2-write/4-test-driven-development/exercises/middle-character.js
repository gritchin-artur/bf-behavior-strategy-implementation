/**
 * Returns the middle character from a string.
 *  It returns the middle 2 characters if the string has an even length.
 *
 * @param {string} [text=''] - Find the middle character(s) of this string.
 * @returns {string} The middle character(s) in the text.
 */
export const middleCharacter = (text = '') => {
  let output = '';

  const mid = Math.floor(text.length / 2);

  if (text.length % 2 === 0) {
    output = text.slice(mid - 1, mid + 1);
  } else {
    output = text.slice(mid, mid + 1);
  }

  return output;
};
