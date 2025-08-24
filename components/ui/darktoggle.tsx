"use client";
import { useState, useEffect } from "react";

export function DarkModeButton() {
  const [dark, setDark] = useState(false);

  // Verifica o tema salvo no localStorage (persistência do tema)
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed bottom-4 right-4 z-50
        px-4 py-2 rounded-2xl shadow-lg
        bg-gray-200 dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
        hover:bg-gray-300 dark:hover:bg-gray-700
      "
    >
      {dark ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
}
