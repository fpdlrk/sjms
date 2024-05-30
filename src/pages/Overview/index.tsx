import React, { useEffect } from "react";
import * as ST from "../../styled/style";
import GnbMenu from "../../components/GnbMenu";
import { ReactComponent as CheckSquare } from "../../assets/img/check-square-broken.svg";
import { ReactComponent as Xcircle } from "../../assets/img/x-circle-contained.svg";
import { ReactComponent as Activity } from "../../assets/img/activity.svg";
import { ReactComponent as LinkIcon } from "../../assets/img/zoom-in.svg";
import { theme } from "../../styled/theme";
import { useLodingStore } from "../../store/globalStore";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useShallow } from "zustand/react/shallow";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";

const Overview = () => {
  const { setIsLoading, isLoading = true } = useLodingStore(
    useShallow((state) => ({ setIsLoading: state.setIsLoading, isLoading: state.isLoading }))
  );

  useEffect(() => {
    setIsLoading(true); // 로딩
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const datas = [
    {
      useName: "Astrid87",
      group: "Astrid87@hotmail.com",
      classN: "GleichnerJohn",
      pettren: "1-575-578-7237 x546",
      regDt: "2024-03-02T12:24:25.371Z",
      status: "S",
      view: "1-575-578-7237 x546",
    },
    {
      useName: "Astrid87",
      group: "Astrid87@hotmail.com",
      classN: "GleichnerJohn",
      pettren: "1-575-578-7237 x546",
      regDt: "2024-03-02T12:24:25.371Z",
      status: "F",
      view: "1-575-578-7237 x546",
    },
  ];

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor("useName", { header: "이름", size: 80, id: "useName" }),
    columnHelper.accessor("group", { header: "그룹", size: 80, id: "group" }),
    columnHelper.accessor("classN", { header: "클래스", size: 60 }),
    columnHelper.accessor("pettren", {
      header: "패턴",
      size: 300,
    }),
    columnHelper.accessor("regDt", {
      header: "시작일",
      size: 200,
      cell: (props) => {
        return <div style={{ textAlign: "center" }}>{props.getValue()}</div>;
      },
    }),
    columnHelper.accessor("status", {
      header: "상태",
      size: 80,
      cell: (props) => {
        return props.getValue() === "S" ? (
          <ST.FlexBox $justify="center" $align="center" $fc={theme.color.success}>
            <ST.Icon $mr={2} $fs={15}>
              <CheckSquare />
            </ST.Icon>
            성공
          </ST.FlexBox>
        ) : (
          <ST.FlexBox $justify="center" $align="center" $fc={theme.color.failed}>
            <ST.Icon $mr={2} $fs={15}>
              <CheckSquare />
            </ST.Icon>
            실패
          </ST.FlexBox>
        );
      },
    }),
    columnHelper.accessor("view", {
      header: "보기",
      size: 60,
      cell: (props) => {
        return (
          <ST.FlexBox $justify="center" $align="center">
            <Link to="">
              <ST.Icon $mr={2} $fs={15}>
                <LinkIcon />
              </ST.Icon>
            </Link>
          </ST.FlexBox>
        );
      },
    }),
  ];

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

          <ST.BasicTagItem $pl={40} $flex={1} $direction="column" style={{ textTransform: "uppercase" }}>
            <ST.TextItem $mb={20} $fs={28} $fw="bold" style={{ textTransform: "uppercase" }}>
              JOBS EXECUTED
            </ST.TextItem>
            {/* 테이블 리스트 */}
            <Table columns={columns} data={datas} />
          </ST.BasicTagItem>
        </ST.FlexBox>
      </ST.FlexBox>
    </>
  );
};

export default Overview;
