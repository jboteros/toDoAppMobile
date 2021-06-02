// @flow

import { normalize, withDefaultStyle } from "./Text";

describe("normalize text", () => {
  it("normalize text 10 expect 18", () => {
    expect(normalize(10)).toEqual(18);
  });

  it("normalize text 12 expect 22", () => {
    expect(normalize(12)).toEqual(22);
  });
});
