import React, { useState } from "react";

const useCounter = (changeBy: number) => {
  const [value, setValue] = useState<number | any>(0);

  const increment = () => {
    setValue(value + changeBy);
  };

  const decrement = () => {
    setValue(value - changeBy);
  };

  return [value, increment, decrement];
};

export default useCounter;
