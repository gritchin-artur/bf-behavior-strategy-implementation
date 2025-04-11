import { removeExclamationMarks } from './includes-slice.js'

describe("removes the exclamation mark from a string", () => {
  it("'qwerty!' --> 'qwerty'", () => {
    expect(removeExclamationMarks('qwerty!')).toEqual('qwerty');
  });
      it("'!qwerty' --> 'qwerty'", () => {
    expect(removeExclamationMarks('!qwerty')).toEqual('qwerty');
      });
          it("'qwe!rty' --> 'qwerty'", () => {
    expect(removeExclamationMarks('qwe!rty')).toEqual('qwerty');
  });
});