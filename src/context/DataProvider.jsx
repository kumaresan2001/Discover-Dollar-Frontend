import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [auth, setAuth] = useState(false);
  const [mode, setMode] = useState("light");
  return (
    <DataContext.Provider
      value={{ account, setAccount, auth, setAuth, mode, setMode }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
