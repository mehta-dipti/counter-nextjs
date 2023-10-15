"use client";
import { useEffect, useState } from "react";
import { CONSTANTS } from "@/constants/index";

const useDarkMode = (initialValue: boolean) => {
  const [darkMode, setDarkMode] = useState(() => {
    const darkFlag: string | null = window.localStorage.getItem(CONSTANTS.ISDARKMODEON);
    return darkFlag ? JSON.parse(darkFlag) : initialValue;
  });

  const body: HTMLBodyElement = document.querySelector("body")!;

  useEffect(() => {
    return darkMode ? body.classList.add(CONSTANTS.DARKMODE) : body.classList.remove(CONSTANTS.DARKMODE);
  }, [darkMode]);

  const changeMode = (value: boolean) => {
    setDarkMode(value);
    window.localStorage.setItem(CONSTANTS.ISDARKMODEON, JSON.stringify(value));
  };

  return [darkMode, changeMode];
};

export default useDarkMode;
