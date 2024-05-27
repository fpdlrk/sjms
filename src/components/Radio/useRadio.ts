import { useState } from "react";

const useRadio = (initValue: string) => {
  const [checkVal, setCheckVal] = useState(initValue);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckVal(e.target.value);
    console.log("65656", e.target.value);
  };

  const setInitValue = (value: string) => {
    setCheckVal(value);
    console.log("65656", checkVal, value, checkVal === value);
  };

  return { checkVal, checkHandler, setInitValue };
};

export default useRadio;
