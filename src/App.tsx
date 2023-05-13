import React from "react";
import { ThemeProvider } from "styled-components";

import menu from "./assets/Icons/menu.png";
// import { menu } from "./assets/index";
// import { Container } from "./Components/ui/Container/container";

const theme = {
  color: {
    header: "#99e9f2",
    content: "#fff",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <></>
    </ThemeProvider>
  );
}

export default App;
