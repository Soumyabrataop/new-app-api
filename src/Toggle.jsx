import React, { useState, useEffect } from "react";

const Toggle = () => {
  const [isDark, setIsDark] = useState("false");

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <label
      htmlFor="dark-mode-toggle"
      className="absolute top-4 right-4 h-10 w-20 cursor-pointer rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
    >
      <input
        onChange={toggleDark} // Correct event handler
        checked={isDark}
        type="checkbox"
        id="dark-mode-toggle"
        className="peer sr-only"
      />
      <span className="absolute inset-y-0 left-1 m-1 w-8 h-8 rounded-full bg-white transition-all peer-checked:left-10"></span>
    </label>
  );
};

export default Toggle;
