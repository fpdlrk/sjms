import * as ST from "../../styled/style";
import { styled } from "styled-components";
import { theme } from "../../styled/theme";
import { ButtonIprops } from "../../styled/styledPropType";

const SelectBox = () => {
  return (
    <SelectBoxOuter>
      <ClickArea $size="lager">선택</ClickArea>
      <OptionArea>
        <OptionClickItem>zczxc</OptionClickItem>
      </OptionArea>
    </SelectBoxOuter>
  );
};

const SelectBoxOuter = styled(ST.BasicTagItem)``;
const ClickArea = styled(ST.Button)<ButtonIprops>`
  height: ${(props) =>
    props.$size === "lager"
      ? props.theme.inputSize.lager
      : props.$size === "middle"
      ? props.theme.inputSize.middle
      : props.$size === "small"
      ? props.theme.inputSize.small
      : "32px"};
  justify-content: left;
`;
const OptionArea = styled(ST.FlexBox)``;
const OptionClickItem = styled(ST.TextButton)``;

export default SelectBox;
