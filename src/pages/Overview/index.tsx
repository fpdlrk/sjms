import React from "react";
import * as ST from "../../styled/style";
import GnbMenu from "../../components/GnbMenu";

const Overview = () => {
  return (
    <>
      <ST.FlexBox height={"100vh"} $direction="column">
        <GnbMenu />
        <ST.FlexBox width={"100%"} $flex={1}>
          Dashboard
        </ST.FlexBox>
      </ST.FlexBox>
    </>
  );
};

export default Overview;
