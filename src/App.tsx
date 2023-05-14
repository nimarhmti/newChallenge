import React from "react";
import { ThemeProvider } from "styled-components";
// import menu from "./assets/Icons/menu.png";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";

const theme = {
  color: {
    header: "#99e9f2",
    content: "#fff",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
