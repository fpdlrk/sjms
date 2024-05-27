import { useState } from "react";
const useFilter = () => {
  const [radioArr, setRadioArr] = useState();
  return { setRadioArr, radioArr };
};

export default useFilter;
