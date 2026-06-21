import React, { createContext, useContext } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const theme = "light";
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
