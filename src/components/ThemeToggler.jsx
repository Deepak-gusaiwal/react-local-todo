import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeProvider";

const ThemeToggler = () => {
  const [isThemeToggle, setIsThemeToggle] = useState(false);
  const { isDark, setIsDark } = useTheme();
  const htmlElem = document.querySelector("html");
  const handdleToggle = () => {
    setIsThemeToggle(!isThemeToggle);
    setIsDark(!isDark);
    htmlElem.classList.remove("dark", "light");
    htmlElem.classList.add(isDark ? "light" : "dark");
  };
  return (
    <div
      onClick={handdleToggle}
      className="  dark:text-yellow-300 rounded-3xl border-solid border-2 border-blue-400 duration-200 w-[80px] relative h-full bg-white dark:bg-black flex justify-between items-center gap-1rem py-2 cursor-pointer px-2"
    >
      <FaSun size="1.2rem" />
      <span
        className={`h-[25px] duration-200  ${
          isThemeToggle ? "translate-x-0" : "translate-x-[153%]"
        } w-[25px] rounded-full absolute bg-black dark:bg-white`}
      ></span>
      <FaMoon size="1.2rem" />
    </div>
  );
};

export default ThemeToggler;
