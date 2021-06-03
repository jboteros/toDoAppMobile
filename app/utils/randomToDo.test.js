// @flow
import { randomToDo } from "./randomToDo";

describe("random task 10", () => {
  console.log(randomToDo(10));
  it("return 10 task", () => {
    expect(randomToDo(10).length).toEqual(10);
  });
});
