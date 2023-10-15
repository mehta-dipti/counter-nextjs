"use client";
import { CONSTANTS } from "@/constants";
import useCounter from "@/hooks/useCounter";
import useDarkMode from "@/hooks/useDarkMode";
import React, { SyntheticEvent, useState } from "react";

const Counter = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [changeBy, setChangeBy] = useState<number>(1);
  const [currValue, increment, decrement] = useCounter(changeBy);

  const toggleMode = (e: SyntheticEvent) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeBy(Number(e.target.value));
  };

  return (
    <>
      {/*display dark mode flag*/}
      <div className="dark-mode__toggle">
        <div onClick={toggleMode} className={darkMode ? "toggle toggled" : "toggle"} />
      </div>

      {/* display counter section */}
      <div className="text-4xl flex items-center justify-between flex-col">
        <div className="counter-container">{currValue}</div>
        <div>
          <button type="button" onClick={() => increment()} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            +
          </button>

          <button type="button" onClick={() => decrement()} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            -
          </button>
        </div>
      </div>

      {/* input field for setting increment by or decrement by value */}
      <div className="flex flex-col items-center mt-10">
        <label className="block mb-2 text-sm font-medium text-gray-900">{CONSTANTS.INCDEC}</label>
        <input type="number" value={changeBy} onChange={handleOnInputChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-1/4 p-2.5 " />
      </div>
    </>
  );
};

export default Counter;
