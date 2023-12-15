import { Box } from "@mui/material";
import Header from "./components/header/Header";
import Home from "../src/components/home/Home";
import DataProvider from "./context/DataProvider";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetailView from "./components/details/DetailView";
import Cart from "../src/components/Cart/Cart";
import OrderSuccess from "./components/cart/OrderSuccess";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState, createContext } from "react";

export const myContext = createContext();
function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgstyles = {
    borderRadius: "0px",
    minHeight: "100vh",
  };

  return (
    <DataProvider>
      <ThemeProvider theme={darkTheme}>
        <Paper sx={bgstyles} elevation={4}>
          <BrowserRouter>
            <myContext.Provider value={[mode, setMode]}>
              <Header />
            </myContext.Provider>

            <Box style={{ marginTop: 54 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<DetailView />} />
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/success" element={<OrderSuccess />}></Route>
              </Routes>
            </Box>
          </BrowserRouter>
        </Paper>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
