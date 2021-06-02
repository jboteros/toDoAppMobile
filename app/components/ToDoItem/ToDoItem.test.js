// @flow

import "react-native";
import React from "react";
import { ToDoItem } from "./ToDoItem";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly ToDoItem", () => {
  const item = {
    id: "1",
    title: "Task",
    body: "Complete this test and update the content",
    isDone: false,
  };
  renderer.create(<ToDoItem item={item} onPress={() => {}} />);
});
