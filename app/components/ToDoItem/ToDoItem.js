//@flow
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "@/components";
import { colors } from "@/styles";

type Props = {|
  item: {| id: string, isDone: boolean, title: string, body: string |},
  onPress: () => mixed,
|};

export function ToDoItem({ item, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text.H4 style={{}}>{item.title}</Text.H4>
      <Text.Subtitle style={{ color: colors.accentText }}>
        {item.body}
      </Text.Subtitle>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 10,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.light,
    marginBottom: 15,
  },
});
