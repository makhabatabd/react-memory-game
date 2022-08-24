import React, { createContext, useState } from "react";
export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [mode, setMode] = useState("normal");
  return (
    <authContext.Provider value={{ mode, setMode }}>
      {children}
    </authContext.Provider>
  );
};