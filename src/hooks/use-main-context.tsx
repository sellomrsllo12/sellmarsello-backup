"use client";

import MainContext from "@/contexts/main-context";
import { useContext } from "react";

export default function useMainContext() {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("useMainContext must be used within MainContextProvider.");
  }

  return context;
}
