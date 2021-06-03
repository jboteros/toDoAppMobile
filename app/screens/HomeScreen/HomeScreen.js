// @flow

import React, { useState, useMemo, useCallback } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView, routes, useNavigation } from "@/navigation";
import { Text, ToDoItem } from "@/components";
import { colors } from "@/styles";
import { MagnifierIcon } from "./MagnifierIcon.svg.js";
import { EmptyList } from "./EmptyList.svg.js";

const ADD_BORDER_RADIUS = 20;

export function HomeScreen() {
  const navigation = useNavigation();

  const [filterValue, setFilterValue] = useState("");
  const [filterIndex, setFilterIndex] = useState(0);

  const [taskList, setTaskList] = useState([]);

  const filteredItems = useMemo(() => {
    let data = [];

    if (filterIndex === 0) {
      data = taskList;
    } else if (filterIndex === 1) {
      data = taskList.filter(({ isDone }) => isDone === false);
    } else if (filterIndex === 2) {
      data = taskList.filter(({ isDone }) => isDone === true);
    }

    return data.filter(
      ({ title, body, isDone }) =>
        body.includes(filterValue) || title.includes(filterValue),
    );
  }, [filterIndex, filterValue, taskList]);

  const handleAddItem = useCallback(
    async (item) => {
      setTaskList([item, ...taskList]);
    },
    [taskList],
  );

  const handleRemoveItem = useCallback(
    async (id) => {
      const data = taskList.filter((item) => item.id !== id);
      setTaskList(data);
    },
    [taskList],
  );

  const handleLoadMockData = useCallback(async (data) => {
    setTaskList(data);
  }, []);

  const handleClearData = useCallback(() => {
    setTaskList([]);
  }, []);

  const handleToggleTask = useCallback(
    (id) => {
      const data = taskList.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item,
      );
      setTaskList(data);
    },
    [taskList],
  );

  const handleAddTask = useCallback(() => {
    navigation.navigate(routes.ADD_TASK, {
      handleAddItem,
      handleLoadMockData,
      handleClearData,
    });
  }, [handleAddItem, handleClearData, handleLoadMockData, navigation]);

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
            <TouchableOpacity
              onPress={handleAddTask}
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
            </TouchableOpacity>
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
          {filteredItems.length > 0 ? (
            filteredItems.filter(Boolean).map((item) => {
              return (
                <ToDoItem
                  key={item.id}
                  item={item}
                  onPress={handleToggleTask}
                  onRemovePress={handleRemoveItem}
                />
              );
            })
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <EmptyList />
              <Text>Your list is empty.</Text>
            </View>
          )}
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
