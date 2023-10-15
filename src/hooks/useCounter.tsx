import React, { useState } from "react";

const useCounter = (changeBy: number) => {
  const [value, setValue] = useState<number | any>(() => {
    const initialValue: string | null = window.localStorage.getItem("counter");
    return initialValue ? JSON.parse(initialValue) : 1;
  });

  const increment = () => {
    let newValue = value + changeBy;
    setValue(newValue);
    window.localStorage.setItem("counter", JSON.stringify(newValue));
  };

  const decrement = () => {
    let newValue = value - changeBy;
    window.localStorage.setItem("counter", JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, increment, decrement];
};

export default useCounter;
