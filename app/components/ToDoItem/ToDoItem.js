//@flow
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "@/components";
import { colors } from "@/styles";
import { CheckIcon } from "./CheckIcon.svg.js";
import { TrashIcon } from "./TrashIcon.svg.js";

type Props = {|
  item: {| id: string, isDone: boolean, title: string, body: string |},
  onPress: (string) => mixed,
  onRemovePress: (string) => mixed,
|};

const CHECK_SIZE = 16;

export function ToDoItem({ item, onPress, onRemovePress }: Props) {
  return (
    <TouchableOpacity style={[styles.button]} onPress={() => onPress(item.id)}>
      <View style={{ flex: 0, paddingRight: 10 }}>
        <View
          style={[
            {
              width: CHECK_SIZE,
              height: CHECK_SIZE,
              borderRadius: CHECK_SIZE,
              borderWidth: 1,
              borderColor: colors.softGray,
              justifyContent: "center",
              alignItems: "center",
            },
            item.isDone && { backgroundColor: colors.primary, borderWidth: 0 },
          ]}>
          <CheckIcon />
        </View>
      </View>
      <View style={styles.item}>
        <Text.H4
          style={[item.isDone && { textDecorationLine: "line-through" }]}>
          {item.title}
        </Text.H4>
        <Text.Subtitle
          style={[
            { color: colors.accentText },
            item.isDone && { textDecorationLine: "line-through" },
          ]}>
          {item.body}
        </Text.Subtitle>
      </View>

      <TouchableOpacity
        onPress={() => {
          onRemovePress(item.id);
        }}>
        <TrashIcon />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    borderRadius: 10,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.light,
    marginBottom: 15,
  },
  item: { flex: 1 },
});
