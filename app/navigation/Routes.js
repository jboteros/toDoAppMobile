// @flow
import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { routes } from "@/navigation";
import { colors } from "@/styles";
import { HomeScreen } from "@/screens/HomeScreen";
import { AddTaskScreen } from "@/screens/AddTaskScreen";
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
        <RootStack.Screen
          name={routes.ADD_TASK}
          component={AddTaskScreen}
          options={{
            title: "Add Task",
            headerBackTitleVisible: false,
            headerTintColor: colors.primary,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
