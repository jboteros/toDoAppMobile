// @flow

import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { Text } from "@/components";
import { useNavigation } from "@/navigation";
import { colors } from "@/styles";
import { TodoData, type ToDoDataProps } from "@/constants/TodoData";

type Props = {
  route: {|
    key: string,
    name: string,
    params: {|
      handleAddItem: ({|
        id: string,
        title: string,
        body: string,
        isDone: boolean,
      |}) => mixed,
      handleLoadMockData: (Array<ToDoDataProps>) => mixed,
      handleClearData: () => mixed,
    |},
  |},
};

export function AddTaskScreen({ route }: Props) {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Text.H5>Title</Text.H5>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setTitle}
            value={title}
            placeholderTextColor={colors.accentText}
            placeholderStyle={{
              fontWeight: "bold",
            }}
            placeholder="ex: call mom, buy milk... "
          />
        </View>
        <Text.H5>Task</Text.H5>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { height: 100 }]}
            onChangeText={setBody}
            value={body}
            multiline
            placeholderTextColor={colors.accentText}
            placeholder="ex: note task..."
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            route?.params?.handleAddItem({
              id: new Date().getTime().toString(),
              title,
              body,
              isDone: false,
            });
            navigation.goBack();
          }}>
          <Text.H5 style={{ color: colors.light }}>CONFIRM</Text.H5>
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Text>Development Debug data</Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.softGray }]}
          onPress={() => {
            route?.params?.handleLoadMockData(TodoData);
            navigation.goBack();
          }}>
          <Text.Subtitle>Load dummy data</Text.Subtitle>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.softGray }]}
          onPress={() => {
            route?.params?.handleClearData();
            navigation.goBack();
          }}>
          <Text.Subtitle>Clear all task</Text.Subtitle>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
    justifyContent: "space-between",
  },
  button: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: colors.primary,
  },
  input: { flex: 1, marginHorizontal: 10 },
  inputContainer: {
    marginBottom: 20,
    flexDirection: "row",
    marginVertical: 5,
    paddingVertical: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
  },
});
