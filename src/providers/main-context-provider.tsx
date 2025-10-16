"use client";

import MainContext from "@/contexts/main-context";
import { useState } from "react";

export default function MainContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [showFooter, setShowFooter] = useState<boolean>(true);

  return (
    <MainContext.Provider
      value={{
        // Attributes
        showNavbar,
        showFooter,

        // Methods
        setShowNavbar,
        setShowFooter,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
