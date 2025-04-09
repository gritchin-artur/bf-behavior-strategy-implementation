import { reverseWords } from './reverse-words.js';

describe('Reverses each word in a string', () => {
  it("'qwerty' -->  'ytrewq'", () => {
    expect(reverseWords('qwerty')).toEqual('ytrewq');
  });
  it("'hello' --> 'olleh'", () => {
    expect(reverseWords('hello')).toEqual('olleh');
  });
  it("'Java' --> 'avaJ'", () => {
    expect(reverseWords('Java')).toEqual('avaJ');
  });
  it("'hello world!' --> 'olleh dlrow!'", () => {
    expect(reverseWords('hello world!')).toEqual('olleh dlrow!');
  });
});
