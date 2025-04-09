import { countCharacters } from './count-characters.js';

describe('how many times repeat each character', () => {
  it("'hi' --> { h: 1, i: 1 }", () => {
    expect(countCharacters('hi')).toEqual({ h: 1, i: 1 });
  });
  it("'hiiii' --> { h: 1, i: 4 }", () => {
    expect(countCharacters('hiiii')).toEqual({ h: 1, i: 4 });
  });
});
