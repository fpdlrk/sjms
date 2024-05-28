import { useEffect, useRef } from "react";

const useSelect = () => {
  const selectRef = useRef(null);
  useEffect(() => {}, [selectRef]);
  console.log("adasd");
  return {
    selectRef,
  };
};

export default useSelect;
