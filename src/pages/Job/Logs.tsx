import * as ST from "../../styled/style";
import { styled } from "styled-components";
import { theme } from "../../styled/theme";
import { ReactComponent as CheckSquare } from "../../assets/img/check-square-broken.svg";
import { ReactComponent as Xcircle } from "../../assets/img/x-circle-contained.svg";
import { LogsDataIprops } from "../../types/type";
import React from "react";

const Logs = ({ logData }: LogsDataIprops) => {
  return (
    <LogBoxOuter className="LogBoxOuter">
      <TitlArea $justify="space-between" className="log">
        <ST.SecTitle>JOB LOGS</ST.SecTitle>
        <ST.FlexBox $fs={12} $fw="middle" $fc={theme.color.fcThird}>
          <ST.FlexBox $align="center">
            <ST.Icon $mr={2} $fs={15} $fc={theme.color.success}>
              <CheckSquare />
            </ST.Icon>
            EXECUTE
            <ST.SapnItem $ml={5} $fw={"bold"} $fc={theme.color.primary}>
              1
            </ST.SapnItem>
          </ST.FlexBox>
          <ST.FlexBox $align="center" $ml={10}>
            <ST.Icon $mr={2} $fs={15} $fc={theme.color.failed}>
              <Xcircle />
            </ST.Icon>
            FAILE
            <ST.SapnItem $ml={5} $fw={"bold"} $fc={theme.color.primary}>
              2
            </ST.SapnItem>
          </ST.FlexBox>
        </ST.FlexBox>
      </TitlArea>
      <Body>
        <List>
          {logData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Item>
                  <ST.SapnItem $mr={5} $fs={16} $fc={item.isFailed ? theme.color.failed : theme.color.success} className="icon">
                    {item.isFailed ? <Xcircle /> : <CheckSquare />}
                  </ST.SapnItem>
                  <ST.SapnItem $fs={12}>{`[${item.date}]`}</ST.SapnItem>
                  <ST.SapnItem $fs={12} $ml={5}>
                    {item.className}
                  </ST.SapnItem>
                  <ST.SapnItem $fs={12} $ml={5}>
                    {item.title}
                  </ST.SapnItem>
                </Item>
              </React.Fragment>
            );
          })}
        </List>
      </Body>
    </LogBoxOuter>
  );
};

const Item = styled.li`
  padding: 5px 0;
  display: flex;
  align-items: center;
  .icon {
    line-height: 0;
  }
`;

const List = styled.ul``;

const Body = styled(ST.FlexBox)`
  flex: 1;
  height: inherit;
`;

const LogBoxOuter = styled(ST.FlexBox)`
  flex: 1;
  flex-direction: column;
  height: inherit;
  padding: 25px;
`;

const TitlArea = styled(ST.FlexBox)`
  width: 100%;
`;

export default Logs;
