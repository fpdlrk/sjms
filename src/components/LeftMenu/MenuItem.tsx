import * as ST from "../../styled/style";
import { theme } from "../../styled/theme";
import { ReactComponent as Dot } from "../../assets/img/dot.svg";
import { ellipsis } from "../../styled/mixin";
import usePositionInfo from "../../hooks/usePostionInfo";
import { styled } from "styled-components";

const MenuItem = ({ item }: any) => {
  const { posLocation, objRemove, pos, randomId } = usePositionInfo();
  return (
    <LeftMenuItem>
      <ST.TextItem>{item.label}</ST.TextItem>
      <IconButton onClick={posLocation}>
        <Dot />
      </IconButton>

      {pos.isShow && (
        <ST.PopupMenu id={randomId} $left={pos.x} $top={pos.y} tabIndex={0} $radius={6} onBlur={objRemove}>
          <ST.TextButton>Pause</ST.TextButton>
          <ST.TextButton>Resume</ST.TextButton>
          <ST.TextButton>Delete</ST.TextButton>
        </ST.PopupMenu>
      )}
    </LeftMenuItem>
  );
};

export default MenuItem;

export const LeftMenuItem = styled(ST.BasicTagItem)`
  padding: 15px;
  position: relative;
  cursor: pointer;
  & + & {
    border-top: 1px solid ${theme.color.midLightGray};
  }
  ${ST.TextItem} {
    padding-right: 25px;
    ${ellipsis()}
  }
`;

export const IconButton = styled(ST.IconButton)`
  line-height: 0;
  font-size: 24px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
