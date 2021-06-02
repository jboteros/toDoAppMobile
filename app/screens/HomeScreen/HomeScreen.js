// @flow

import React, { useState, useMemo, useCallback } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "@/navigation";
import { Text, ToDoItem } from "@/components";
import { colors } from "@/styles";

import { MagnifierIcon } from "./MagnifierIcon.svg.js";

const MOCK_ITEMS = [
  {
    id: "1",
    title: "Task",
    body: "New task",
    isDone: false,
  },
  {
    id: "2",
    title: "Meeting with Mr Jonas",
    body: "Complete this test and update the content",
    isDone: false,
  },
  {
    id: "3",
    title: "Meeting with Mr Jonas",
    body: "This test and update the content",
    isDone: false,
  },
  {
    id: "4",
    title: "Meeting with Mr Jonas",
    body: "Complete this test and update the content",
    isDone: false,
  },
  {
    id: "5",
    title: "Meeting with Mr Jonas",
    body: "Complete this test and update the content",
    isDone: false,
  },
  {
    id: "6",
    title: "Meeting with Mr Jonas",
    body: "Complete this test and update the content",
    isDone: false,
  },
  {
    id: "7",
    title: "Meeting with Mr Jonas",
    body: "Complete this test and update the content",
    isDone: false,
  },
  {
    id: "8",
    title: "Meeting with Mr Jonas",
    body: "Complete this test and update the content",
    isDone: false,
  },
    {
    id: "9",
    title: "Meeting with Mr Jonas",
    body: "Complete this test and update the content",
    isDone: false,
  },
  {
    id: "10",
    title: "Meeting with Mr Jonas",
    body: "Complete this test and update the content",
    isDone: false,
  },
  {
    id: "11",
    title: "Meeting with Mr Jonas",
    body: "Complete this test and update the content",
    isDone: false,
  },
];
const ADD_BORDER_RADIUS = 20;

export function HomeScreen() {
  const [filterValue, setFilterValue] = useState("");
  const [filterIndex, setFilterIndex] = useState(0);

  const filteredItems = useMemo(() => {
    return MOCK_ITEMS.filter(
      ({ title, body }) =>
        body.includes(filterValue) || title.includes(filterValue),
    );
  }, [filterValue]);

  const handleSelectItem = useCallback(async () => {
    console.log("handleSelectItem");
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <SafeAreaView edges={["right", "bottom", "left"]} />
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}>
            <Text.H1>Task</Text.H1>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: colors.primary,
                justifyContent: "center",
                alignItems: "center",
                borderBottomLeftRadius: ADD_BORDER_RADIUS,
                borderTopLeftRadius: ADD_BORDER_RADIUS,
                borderTopRightRadius: ADD_BORDER_RADIUS,

                shadowColor: colors.primary,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <Text.H2 style={{ lineHeight: 32, color: colors.light }}>
                +
              </Text.H2>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <MagnifierIcon />
            <TextInput
              style={styles.input}
              onChangeText={setFilterValue}
              value={filterValue}
              placeholderTextColor={colors.accentText}
              placeholderStyle={{
                fontWeight: "bold",
              }}
              clearButtonMode="always"
              placeholder="Search items..."
            />
          </View>
          <View style={styles.filterContainer}>
            <TouchableOpacity
              onPress={() => setFilterIndex(0)}
              style={styles.filterItem}>
              <Text
                style={[
                  { fontWeight: "bold" },
                  filterIndex === 0 && {
                    color: colors.primary,
                  },
                ]}>
                All Items
              </Text>
              {filterIndex === 0 && <View style={styles.buttonFilter} />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setFilterIndex(1)}
              style={styles.filterItem}>
              <Text
                style={[
                  { fontWeight: "bold" },
                  filterIndex === 1 && {
                    color: colors.primary,
                  },
                ]}>
                Not completed
              </Text>
              {filterIndex === 1 && <View style={styles.buttonFilter} />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setFilterIndex(2)}
              style={styles.filterItem}>
              <Text
                style={[
                  { fontWeight: "bold" },
                  filterIndex === 2 && {
                    color: colors.primary,
                  },
                ]}>
                Completed
              </Text>
              {filterIndex === 2 && <View style={styles.buttonFilter} />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          {filteredItems.filter(Boolean).map((item) => {
            return (
              <ToDoItem key={item.id} item={item} onPress={handleSelectItem} />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },
  headerContainer: {
    flex: 0,
    paddingTop: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,

    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: { flex: 1, marginHorizontal: 10 },
  inputContainer: {
    flexDirection: "row",
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: colors.backgroundApp,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  filterContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  filterItem: { alignItems: "center" },
  buttonFilter: {
    marginVertical: 5,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.primary,
  },
});
