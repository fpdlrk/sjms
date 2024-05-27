import React, { useEffect, useState } from "react";
import * as ST from "../../styled/style";
import Radio from "../Radio";
import useRadio from "../Radio/useRadio";
import { theme } from "../../styled/theme";
// import { radioArr, setRadioArr } from "./useFilter";
const Filter = () => {
  const { checkVal, checkHandler, setInitValue } = useRadio("01");
  // const { radioArr, setRadioArr } = useFilter();
  const [radioArr, setRadioArr] = useState([
    {
      label: "All",
      value: "01",
    },
    {
      label: "Enabled",
      value: "02",
    },
    {
      label: "Not Enabled",
      value: "03",
    },
  ]);

  useEffect(() => {}, []);
  return (
    <ST.Filter>
      <ST.FlexBox>
        {radioArr.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Radio
                id={item.value}
                name="radio"
                label={item.label}
                value={item.value}
                color={theme.color.primary}
                checked={checkVal === item.value}
                onChange={checkHandler}
              />
            </React.Fragment>
          );
        })}
      </ST.FlexBox>
      <ST.InputField type="text" width={"100%"} $pa={10} $mt={10} $size="middle" placeholder="검색어 입력" />
    </ST.Filter>
  );
};

export default Filter;
