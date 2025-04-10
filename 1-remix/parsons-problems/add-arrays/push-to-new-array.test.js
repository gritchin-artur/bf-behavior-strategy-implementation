import { addArrays } from "./push-to-new-array.js";

describe("addition of two arrays", () => {
  it("[1, 2, 3], [3, 2, 1] --> [4, 4, 4]", () => {
    expect(addArrays([1, 2, 3], [3, 2, 1])).toEqual([4, 4, 4]);
  });
  it("does not accept arrays containing not-numbers", () => {
    expect(() => {
      addArrays([1, 2, "3", 4], [1, 2, 3]);}).toThrow("You done goof'd");
  });
});
