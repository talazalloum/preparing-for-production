import { expect } from "chai";
import { shuffle } from "../starter/src/shuffle.js";

describe("shuffle function", () => {
  it("should shuffle array indexes", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...arr]);

    expect(shuffled).to.have.lengthOf(arr.length);
    expect(shuffled).to.not.deep.equal(arr);
  });
});