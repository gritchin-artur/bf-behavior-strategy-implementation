import { repeatString } from './tail-call-conditional.js'

describe("repeat string", () => {
  it("'qwerty', 1, 'qw' --> 'qwqwerty'", () => {
    expect(repeatString('qwerty' , 1, 'qw')).toEqual('qwqwerty');
  });
      it("'qwerty', 2 'qw' --> 'qwqwqwerty'", () => {
    expect(repeatString('qwerty', 2, 'qw')).toEqual('qwqwertyqwerty');
      });
          it("'qwerty', 3 --> 'qwqwqwqwerty'", () => {
    expect(repeatString('qwerty', 3, 'qw')).toEqual('qwqwertyqwertyqwerty');
  });
});