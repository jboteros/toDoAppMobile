// // @flow

// import "react-native-gesture-handler/jestSetup";

// jest.mock("react-native-reanimated", () => {
//   const Reanimated = require("react-native-reanimated/mock");

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });

// // // Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// // jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

// // // As of react-native@0.64.X file has moved
// // jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// @flow

import React from "react";
import renderer from "react-test-renderer";

describe("Basic Test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});
