import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import { lightMode, darkMode } from "./Styles/Theme";
import { Container } from "./App.Style";

const LIGHT_THEME = "Light";
const DARK_THEME = "Dark";
const INITIAL_COUNT = 15;
function App() {
  const [count, setCount] = useState<number>(INITIAL_COUNT);
  const [themeMode, setThemeMode] = useState<string>(LIGHT_THEME);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => --prevCount);
      }
      if (count == 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  const themeToggle = () => {
    setThemeMode((prevTheme: string) => {
      return prevTheme == LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    });
  };
  const setThemeHandler = (theme: string) => {
    setThemeMode(theme);
  };
  const openSidebarHandler = () => {
    setIsOpen((preState) => !preState);
  };
  return (
    <ThemeProvider theme={themeMode == LIGHT_THEME ? lightMode : darkMode}>
      <Container>
        <Navbar count={count} setTheme={setThemeHandler} />
        <Sidebar isOpen={isOpen} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
