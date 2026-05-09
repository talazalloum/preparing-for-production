import { expect } from "chai";
import { shuffle } from "../starter/src/shuffle.js";

describe("shuffle function", () => {
  it("should shuffle array indexes", () => {
    const array = [1, 2, 3, 4, 5];

    const shuffled = shuffle(array);

    expect(shuffled).to.have.lengthOf(array.length);
  });
});