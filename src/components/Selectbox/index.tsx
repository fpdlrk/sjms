import * as ST from "../../styled/style";
import { styled } from "styled-components";
import { theme } from "../../styled/theme";
import { ButtonIprops } from "../../styled/styledPropType";
import { ReactComponent as Sort } from "../../assets/img/sort-vertical-01.svg";
import React, { useState } from "react";
import usePositionInfo from "../../hooks/usePostionInfo";
import { OptionsIprops } from "../../types/constant";

const SelectBox = ({ optionItem, id, size, handleSelect, selectedValue, invalid }: OptionsIprops) => {
  const [isExpand, setIsExpand] = useState(false);
  const { posLocation, objRemove, pos, randomId } = usePositionInfo();

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsExpand((prev) => !prev);
    posLocation(e);
  };

  const optionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleSelect(e.currentTarget.value);
    setIsExpand((prev) => !prev);
  };

  const blurHanlder = (e: any) => {
    objRemove(e);
    setIsExpand((prev) => !prev);
  };

  return (
    <SelectBoxOuter>
      <ST.BasicTagItem onMouseDown={handleMouseDown}>
        <ClickArea $size={size} value={selectedValue} $invalid={invalid} readOnly>
          {optionItem.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {selectedValue ? <option value={item.value}>{item.label}</option> : <option value={"null"}>선택</option>}
              </React.Fragment>
            );
          })}
        </ClickArea>
        <Icon>
          <Sort />
        </Icon>
      </ST.BasicTagItem>

      {isExpand && (
        <OptionArea id={randomId} tabIndex={0} onMouseDown={objRemove} onBlur={blurHanlder}>
          {optionItem.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <OptionClickItem onClick={optionClick} value={item.value}>
                  {item.label}
                </OptionClickItem>
              </React.Fragment>
            );
          })}
        </OptionArea>
      )}
    </SelectBoxOuter>
  );
};

const SelectBoxOuter = styled(ST.BasicTagItem)``;
const Icon = styled(ST.Icon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
const ClickArea = styled.select<ButtonIprops & { readOnly: boolean; $invalid?: string }>`
  width: 100%;
  height: ${(props) =>
    props.$size === "lager"
      ? props.theme.inputSize.lager
      : props.$size === "middle"
      ? props.theme.inputSize.middle
      : props.$size === "small"
      ? props.theme.inputSize.small
      : "32px"};
  padding: 0 15px;
  justify-content: left;
  border: 1px solid ${theme.color.midLightGray};
  background-color: ${theme.color.white};
  border-radius: 6px;
  border: ${(props) => props.$invalid === "true" && `1px solid ${theme.color.failed} !important`};
  cursor: pointer;
`;

const OptionClickItem = styled(ST.TextButton)``;

const OptionArea = styled(ST.FlexBox)`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.color.midLightGray};
  border-radius: 6px;
  overflow: hidden;
  position: absolute;
  background-color: ${theme.color.white};
  z-index: 20;
  &:focus {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  }

  ${OptionClickItem} {
    width: 100%;
    padding: 8px 15px;
    transition: background 0.3s;
    &:hover {
      background-color: ${theme.color.options};
    }
    &:focus {
      background-color: ${theme.color.info};
      color: ${theme.color.white};
    }
  }
`;

export default React.memo(SelectBox);
