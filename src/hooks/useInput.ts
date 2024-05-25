import React, { useState } from "react";

const useInput = (initValue: any): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [inputValue, setInputValue] = useState(initValue);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return [inputValue, changeHandler];
};

export default useInput;
