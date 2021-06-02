// @flow

import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Routes } from "./Routes";

export function Providers() {
  return (
    <ActionSheetProvider>
      <Routes />
    </ActionSheetProvider>
  );
}

export * as routes from "./routeNames";
export { createStackNavigator } from "@react-navigation/stack";
export { useNavigation, useFocusEffect } from "@react-navigation/native";
export type { RouteProp } from "@react-navigation/native";
export {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
