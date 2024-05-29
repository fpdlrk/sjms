import React from "react";
import Radio from ".";
import { theme } from "../../styled/theme";
import useRadio from "../../hooks/useRadio";

type RadioItemsType = {
  label: string;
  value: string;
};

type RadioGroupIprops = {
  checkValue: string | number;
  items: RadioItemsType[];
};

const RadioGroup = ({ items, checkValue }: RadioGroupIprops) => {
  const { checkVal, checkHandler, setInitValue } = useRadio(checkValue);
  return (
    <>
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Radio
              id={item.value}
              name={item.value}
              label={item.label}
              value={item.value}
              color={theme.color.primary}
              checked={checkVal === item.value}
              onChange={checkHandler}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default RadioGroup;
