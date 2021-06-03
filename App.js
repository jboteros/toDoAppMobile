// @flow

import React from "react";
import { Providers } from "@/navigation";
import { StorageProvider } from "@/contexts/StorageContext";

export function App() {
  return (
    <StorageProvider>
      <Providers />
    </StorageProvider>
  );
}
