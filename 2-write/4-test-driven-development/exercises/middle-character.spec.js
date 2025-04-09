import { middleCharacter } from './middle-character.js';

describe('Returns the middle character from a string', () => {
  it("'qwerty' -->  'er'", () => {
    expect(middleCharacter('qwerty')).toEqual('er');
  });
  it("'12345' --> '3", () => {
    expect(middleCharacter('12345')).toEqual('3');
  });
  it("'Java' --> 'av'", () => {
    expect(middleCharacter('Java')).toEqual('av');
  });
  it("'ScRiPt' --> 'Ri'", () => {
    expect(middleCharacter('ScRiPt')).toEqual('Ri');
  });
});
