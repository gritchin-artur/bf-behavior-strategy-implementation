import { matchingBraces } from './matching-braces.js';

describe('Checks if the braces in a string are matched', () => {
  it("'[' -->  false", () => {
    expect(matchingBraces('[')).toEqual(false);
  });
  it("'()' --> true", () => {
    expect(matchingBraces('()')).toEqual(true);
  });
  it("'(]' --> false", () => {
    expect(matchingBraces('(]')).toEqual(false);
  });
  it("'{[]}' --> true", () => {
    expect(matchingBraces('{[]}')).toEqual(true);
  });
  it("'([)]' --> false", () => {
    expect(matchingBraces('([)]')).toEqual(false);
  });
  it("'()[]{}' --> true", () => {
    expect(matchingBraces('()[]{}')).toEqual(true);
  });
});
