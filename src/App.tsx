import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import { lightMode, darkMode } from "./Styles/Theme";
import { Container } from "./App.Style";
import { Button } from "./Styles/Ui";
import { sizes } from "./Styles/breakpoint";
import { useThemeDetector } from "./utils/ThemeDetector ";
import { keys } from "./Config/Keys";

function App() {
  const isDarkTheme = useThemeDetector();
  const [count, setCount] = useState<number>(keys.INITIAL_COUNT);
  const [themeMode, setThemeMode] = useState<string>(isDarkTheme);
  const [WinWidth, setWinWidth] = useState(window.innerWidth);
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
  //window width with resize
  useEffect(() => {
    const handleWindowResize = () => {
      setWinWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const themeToggle = () => {
    setThemeMode((prevTheme: string) => {
      return prevTheme == keys.LIGHT_THEME ? keys.DARK_THEME : keys.LIGHT_THEME;
    });
  };
  const setThemeHandler = (theme: string) => {
    setThemeMode(theme);
  };
  const openSidebarHandler = () => {
    setIsOpen((preState) => !preState);
  };
  const decreaseCountHandler = () => {
    if (count <= 0) {
      setCount(keys.INITIAL_COUNT);
    } else setCount((preState) => --preState);
  };
  console.log(isDarkTheme);
  return (
    <ThemeProvider theme={themeMode == keys.LIGHT_THEME ? lightMode : darkMode}>
      <Container>
        <Navbar
          count={count}
          onSetTheme={setThemeHandler}
          onOpenSidebar={openSidebarHandler}
        />
        {WinWidth < sizes.mobileL ? (
          <Sidebar isOpen={isOpen} onCloseSidebar={openSidebarHandler} />
        ) : null}

        <Button onClick={decreaseCountHandler}>
          {count ? "click on me" : "reset"}
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
