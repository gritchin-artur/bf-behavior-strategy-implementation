import { repeatString } from './logic-in-head.js'

describe("repeat string", () => {
  it("'qwerty', 1 --> 'qwerty'", () => {
    expect(repeatString('qwerty' , 1)).toEqual('qwerty');
  });
      it("'qwerty', 2 --> 'qwertyqwerty'", () => {
    expect(repeatString('qwerty', 2)).toEqual('qwertyqwerty');
      });
          it("'qwerty', 3 --> 'qwertyqwertyqwerty'", () => {
    expect(repeatString('qwerty', 3)).toEqual('qwertyqwertyqwerty');
  });
});