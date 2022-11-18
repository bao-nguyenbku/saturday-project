import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [projectName, setProjectName] = useState('Accommodation');
  return (
    <AppContext.Provider value={{ projectName, setProjectName }}>
      {children}
    </AppContext.Provider>
  )
}