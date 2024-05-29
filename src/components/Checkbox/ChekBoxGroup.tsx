import React from "react";
import { CheckByTypeBox, Checkbox } from ".";
import { theme } from "../../styled/theme";
import useCheckbox from "../../hooks/useCheckbox";

type RadioItemsType = {
  label: string;
  value: string;
};

type RadioGroupIprops = {
  checkValue: string[];
  items: RadioItemsType[];
};

export const ChekBoxGroup = ({ items, checkValue }: RadioGroupIprops) => {
  const { checkVal, checkHandler, setInitValue } = useCheckbox(checkValue);
  return (
    <>
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Checkbox
              id={item.value}
              name={item.value}
              label={item.label}
              value={item.value}
              color={theme.color.primary}
              checked={checkVal[index] === item.value}
              onChange={checkHandler}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export const CheckByTypeBoxGroup = ({ items, checkValue }: RadioGroupIprops) => {
  const { checkVal, checkHandler, setInitValue } = useCheckbox(checkValue);
  return (
    <>
      {items.map((item, index) => {
        const checkedValue = () => {
          let isVal = checkVal.includes(item.value);
          return isVal;
        };

        return (
          <React.Fragment key={index}>
            <CheckByTypeBox
              id={item.value}
              name={item.value}
              label={item.label}
              value={item.value}
              color={theme.color.primary}
              checked={checkedValue()}
              onChange={checkHandler}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
