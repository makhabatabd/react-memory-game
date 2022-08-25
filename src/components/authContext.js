import React, { createContext, useState } from "react";
export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [mode, setMode] = useState("normal");
  const [board, setBoard] = useState("normal")
  return (
    <authContext.Provider value={{ mode, setMode, board, setBoard }}>
      {children}
    </authContext.Provider>
  );
};