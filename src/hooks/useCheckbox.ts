import { useState } from "react";

const useRadio = (initValue: string[]) => {
  const [checkVal, setCheckVal] = useState(initValue);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isHasValue = checkVal.includes(e.target.value);
    if (isHasValue) {
      const newValue = checkVal.filter((item) => {
        return item !== e.target.value;
      });
      setCheckVal(newValue);
      return;
    }
    setCheckVal([...checkVal, e.target.value]);
  };

  const setInitValue = (value: string[]) => {
    setCheckVal(value);
  };

  return { checkVal, checkHandler, setInitValue };
};

export default useRadio;
