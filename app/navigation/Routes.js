// @flow
import React, { useRef, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import { colors } from "@/styles";
import { routes } from "@/navigation";

import { HomeScreen } from "@/screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

export function Routes() {
  const navigationRef = useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen
          name={routes.HOME}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
