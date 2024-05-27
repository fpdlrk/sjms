import React from "react";
import * as ST from "../../styled/style";
import GnbMenu from "../../components/GnbMenu";
import { ReactComponent as CheckSquare } from "../../assets/img/check-square-broken.svg";
import { ReactComponent as Xcircle } from "../../assets/img/x-circle-contained.svg";
import { ReactComponent as Activity } from "../../assets/img/activity.svg";
import { theme } from "../../styled/theme";

const Overview = () => {
  return (
    <>
      <ST.FlexBox height={"100vh"} $direction="column">
        <GnbMenu />
        <ST.FlexBox width={"100%"} $pt={50} $pl={40} $pr={40} $flex={1} $justify="space-between">
          <ST.FlexBox width={350} $pl={35} $pr={35} $direction="column">
            <ST.TextItem $fs={28} $fw="bold" style={{ textTransform: "uppercase" }}>
              overview
            </ST.TextItem>

            <ST.TextItem $mt={20} $mb={10}>
              Total JOB <ST.SapnItem $fw="bold">26</ST.SapnItem>
            </ST.TextItem>

            <ST.FlexBox width={"100%"} $background={theme.color.success} $align="center" $radius={12} $pa={30} $fc={theme.color.white}>
              <ST.FlexBox $flex={1} $direction="column">
                <ST.TextItem $fw="middle">JOBS EXECUTED</ST.TextItem>
                <ST.TextItem $mt={15} $fs={36} $fw="bold">
                  295
                </ST.TextItem>
              </ST.FlexBox>
              <ST.Icon $fs={50}>
                <CheckSquare />
              </ST.Icon>
            </ST.FlexBox>

            <ST.FlexBox width={"100%"} $mt={24} $background={theme.color.failed} $align="center" $radius={12} $pa={30} $fc={theme.color.white}>
              <ST.FlexBox $flex={1} $direction="column">
                <ST.TextItem $fw="middle">JOBS FAILED</ST.TextItem>
                <ST.TextItem $mt={15} $fs={36} $fw="bold">
                  52
                </ST.TextItem>
              </ST.FlexBox>
              <ST.Icon $fs={50}>
                <Xcircle />
              </ST.Icon>
            </ST.FlexBox>

            <ST.FlexBox width={"100%"} $mt={24} $background={theme.color.info} $align="center" $radius={12} $pa={30} $fc={theme.color.white}>
              <ST.FlexBox $flex={1} $direction="column">
                <ST.TextItem $fw="middle">JOBS EXECUTING</ST.TextItem>
                <ST.TextItem $mt={15} $fs={36} $fw="bold">
                  0
                </ST.TextItem>
              </ST.FlexBox>
              <ST.Icon $fs={50}>
                <Activity />
              </ST.Icon>
            </ST.FlexBox>
          </ST.FlexBox>

          <ST.FlexBox $pl={40} $flex={1} $direction="column" style={{ textTransform: "uppercase" }}>
            <ST.TextItem $fs={28} $fw="bold" style={{ textTransform: "uppercase" }}>
              JOBS EXECUTED
            </ST.TextItem>
          </ST.FlexBox>
        </ST.FlexBox>
      </ST.FlexBox>
    </>
  );
};

export default Overview;
