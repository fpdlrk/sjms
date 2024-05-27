import { styled } from "styled-components";
import React from "react";
import MenuItem from "./MenuItem";
import * as ST from "../../styled/style";
import { theme } from "../../styled/theme";
import { ReactComponent as Edit } from "../../assets/img/edit-03.svg";

const sampleData = [
  {
    label: "스케줄 제목1",
  },
  {
    label: "스케줄 제목2",
  },
  {
    label: "스케줄 제목3",
  },
];

const LeftMenu = () => {
  return (
    <>
      <LeftMenuWrap>
        {sampleData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <MenuItem item={item} />
            </React.Fragment>
          );
        })}
      </LeftMenuWrap>
      <ST.Button $size="lager" $radius={0} $bn={"none"} $background={theme.color.info} $fc={theme.color.white}>
        <ST.Icon $fs={20}>
          <Edit />
        </ST.Icon>
        신규 잡등록
      </ST.Button>
    </>
  );
};

export const LeftMenuWrap = styled.div`
  flex: 1;
`;

export default LeftMenu;
