import React, { useState, useEffect } from "react";
import { keys } from "../Config/Keys";

const getThemeKey = "(prefers-color-scheme: dark)";
export const useThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia(getThemeKey).matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e: any) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia(getThemeKey);
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);
  return isDarkTheme ? keys.DARK_THEME : keys.LIGHT_THEME;
};
