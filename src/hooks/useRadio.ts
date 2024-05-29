import { useState } from "react";

const useRadio = (initValue: string | number) => {
  const [checkVal, setCheckVal] = useState(initValue);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckVal(e.target.value);
  };

  const setInitValue = (value: string | number) => {
    setCheckVal(value);
  };

  return { checkVal, checkHandler, setInitValue };
};

export default useRadio;
