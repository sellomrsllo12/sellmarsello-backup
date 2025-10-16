"use client";

import { createContext } from "react";
import { type MainContextType } from "@/types/main-context";

const MainContext = createContext<MainContextType>({
  // Attributes
  showNavbar: true,
  showFooter: true,

  // Methods
  setShowNavbar: (status: boolean) => {},
  setShowFooter: (status: boolean) => {},
});

export default MainContext;
