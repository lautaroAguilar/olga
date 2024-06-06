"use client";
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export default function AppContextProvider({ children }) {

  /* just in case, for now isn't used */
  const [introduction, setIntroduction] = useState(true);

  return (
    <MyContext.Provider
      value={{
        introduction,
        setIntroduction,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useAppContext = () => useContext(MyContext);
