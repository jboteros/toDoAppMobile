// @flow

import { colors } from "./colors";

describe("colors alphaLight", () => {
  it("alphaLight 0%", () => {
    expect(colors.alphaLight(0.0)).toEqual("rgba(255,255,255,0)");
  });
  it("alphaLight 25%", () => {
    expect(colors.alphaLight(0.25)).toEqual("rgba(255,255,255,0.25)");
  });
  it("alphaLight 50%", () => {
    expect(colors.alphaLight(0.5)).toEqual("rgba(255,255,255,0.5)");
  });
  it("alphaLight 75%", () => {
    expect(colors.alphaLight(0.75)).toEqual("rgba(255,255,255,0.75)");
  });
});

describe("colors alphaDark", () => {
  it("alphaLight 0%", () => {
    expect(colors.alphaDark(0.0)).toEqual("rgba(0,0,0,0)");
  });
  it("alphaDark 25%", () => {
    expect(colors.alphaDark(0.25)).toEqual("rgba(0,0,0,0.25)");
  });
  it("alphaDark 50%", () => {
    expect(colors.alphaDark(0.5)).toEqual("rgba(0,0,0,0.5)");
  });
  it("alphaDark 75%", () => {
    expect(colors.alphaDark(0.75)).toEqual("rgba(0,0,0,0.75)");
  });
});

describe("colors alphaPrimary", () => {
  it("alphaPrimary 0%", () => {
    expect(colors.alphaPrimary(0.0)).toEqual("rgba(50,169,236,0)");
  });
  it("alphaPrimary 25%", () => {
    expect(colors.alphaPrimary(0.25)).toEqual("rgba(50,169,236,0.25)");
  });
  it("alphaPrimary 50%", () => {
    expect(colors.alphaPrimary(0.5)).toEqual("rgba(50,169,236,0.5)");
  });
  it("alphaPrimary 75%", () => {
    expect(colors.alphaPrimary(0.75)).toEqual("rgba(50,169,236,0.75)");
  });
});
