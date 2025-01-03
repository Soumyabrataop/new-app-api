import React, { useState } from "react";
import "./global.css";
import Search from "./Search";
import Toggle from "./toggle.jsx";

const App = () => {
  const [myValue, setMyValue] = React.useState("");
  const [finalValue, setFinalValue] = React.useState("");

  const checkValue = () => {
    setFinalValue(myValue);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toggle />
      <div className="mt-20">
        <a href="/">
          <h1 className="mt-5 text-center mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground dark:text-white md:text-5xl/[1.1]">
            MovieLand
          </h1>
        </a>
      </div>
      <div className="mt-8 text-center mx-auto max-w-3xl">
        <input
          type="text"
          placeholder="Search..."
          value={myValue}
          onChange={(e) => setMyValue(e.target.value)}
          className="dark:text-white dark:bg-black w-full max-w-md p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md dark:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
        />
        <button
          type="button"
          onClick={checkValue}
          className="text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        {finalValue && <Search value={finalValue} />}
      </div>
    </div>
  );
};

export default App;
