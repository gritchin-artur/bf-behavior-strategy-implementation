/**
 * Reverses each word in a string.
 *
 * @param {string} [text=''] - The string of words to reverse.
 * @returns {string} The text, with each word reversed.
 *
 * @example
 *
 * reverseWords('hello'); // 'olleh'
 *
 * @example
 *
 * reverseWords('hello world!'); // 'olleh dlrow!'
 */
export const reverseWords = (text = '') => {
  const symbols = /[^a-zA-Z0-9]/;

  let output = '';

  if (symbols.test(text[text.length - 1])) {
    output =
      text
        .slice(0, -1)
        .split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join(' ') + text.slice(-1);
  } else {
    output = text.split('').reverse().join('');
  }
  console.log(output);
  return output;
};
