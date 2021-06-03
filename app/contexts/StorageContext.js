// @flow

import React, { createContext, type Node } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type StorageContextValue = {
  getItem(
    key: string,
    callback?: (error?: any, result?: ?string) => void,
  ): Promise<?string>,
  setItem(
    key: string,
    value: string,
    callback?: (error?: any) => void,
  ): Promise<void>,
  mergeItem(
    key: string,
    value: string,
    callback?: (error?: any) => void,
  ): Promise<void>,
  removeItem(key: string, callback?: (error?: any) => void): Promise<void>,
};

export const StorageContext = createContext<null | StorageContextValue>(null);

export function StorageProvider({ children }: { children: Node }) {
  return (
    <StorageContext.Provider
      value={{
        getItem: AsyncStorage.getItem,
        setItem: AsyncStorage.setItem,
        mergeItem: AsyncStorage.mergeItem,
        removeItem: AsyncStorage.removeItem,
      }}>
      {children}
    </StorageContext.Provider>
  );
}
