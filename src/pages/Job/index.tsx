import React from "react";
import * as ST from "../../styled/style";
import GnbMenu from "../../components/GnbMenu";
import Filter from "../../components/Filter";
import LeftMenu from "../../components/LeftMenu";
import { styled } from "styled-components";
import { theme } from "../../styled/theme";
import { ReactComponent as CheckSquare } from "../../assets/img/check-square-broken.svg";
import { ReactComponent as Xcircle } from "../../assets/img/x-circle-contained.svg";
import { ReactComponent as Activity } from "../../assets/img/activity.svg";
import Detail from "./Detail";
import Logs from "./Logs";

const spmData = [
  { date: "2024-05-30 15:30", title: "로그파일 타이틀1", className: "SapmleClassName", isFailed: true },
  { date: "2024-05-30 15:30", title: "로그파일 타이틀1", className: "SapmleClassName", isFailed: false },
];

const Job = () => {
  return (
    <ST.SubLayout>
      <GnbMenu />
      <ST.SubLayoutBody>
        <ST.SubLayoutLeft>
          <ST.SecTitle>JOB LIST</ST.SecTitle>
          <Filter />
          <LeftMenu />
        </ST.SubLayoutLeft>

        <ST.SubLayoutRight>
          <JobContent $justify="space-between">
            {/* 디테일 영역 */}
            <Detail />

            {/* 로그 영역 */}
            <Logs logData={spmData} />
          </JobContent>
        </ST.SubLayoutRight>
      </ST.SubLayoutBody>
    </ST.SubLayout>
  );
};

export const JobContent = styled(ST.FlexBox)`
  height: inherit;
`;

export default Job;
