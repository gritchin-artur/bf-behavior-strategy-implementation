/**
 * Checks if the braces in a string are matched.
 *
 * @param {string} [text=''] - The text of braces to check.
 * @returns {boolean} Whether or not the braces are matched.
 *
 * @example
 *
 * matchingBraces('['); // false
 *
 * @example
 *
 * matchingBraces('()'); // true
 *
 * @example
 *
 * matchingBraces('(]'); // false
 *
 * @example
 *
 * matchingBraces('{[]}'); // true
 *
 * @example
 *
 * matchingBraces('([)]'); // false
 *
 * @example
 *
 * matchingBraces('()[]{}'); // true
 *
 */
export const matchingBraces = (text = '') => {
  const stack = [];
  for (const char of text) {
    if (char === '(' || char === '[' || char === '{') stack.push(char);
    else if (char === ')' && stack.pop() !== '(') return false;
    else if (char === ']' && stack.pop() !== '[') return false;
    else if (char === '}' && stack.pop() !== '{') return false;
  }
  return stack.length === 0;
};
