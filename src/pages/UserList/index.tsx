import React, { useEffect } from "react";
import * as ST from "../../styled/style";
import GnbMenu from "../../components/GnbMenu";
import { theme } from "../../styled/theme";
import { ReactComponent as XIcon } from "../../assets/img/x-02.svg";
import { ReactComponent as Edit } from "../../assets/img/edit-03.svg";
import Table from "../../components/Table/Table";
import { faker } from "@faker-js/faker";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { styled } from "styled-components";
import { useLodingStore } from "../../store/globalStore";
import { useShallow } from "zustand/react/shallow";

const UserList = () => {
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
      email: "Astrid87@hotmail.com",
      name: "GleichnerJohn",
      regDt: "2023-07-20T16:23:31.683Z",
      edtDt: "2023-12-01T16:15:32.185Z",
      position: "1-575-578-7237 x546",
    },
    {
      email: "Camren80@gmail.com",
      name: "DurganEleonore",
      regDt: "2024-03-02T12:24:25.371Z",
      edtDt: "2023-10-09T06:09:09.272Z",
      position: "805.316.5243 x83812",
    },
    {
      email: "Keshawn.West@hotmail.com",
      name: "HirtheFrankie",
      regDt: "2024-04-29T11:56:46.606Z",
      edtDt: "2023-12-16T03:41:29.234Z",
      position: "997-351-2285",
    },
    {
      email: "Lilyan.Gutkowski@yahoo.com",
      name: "BechtelarZelma",
      regDt: "2024-02-18T00:28:21.052Z",
      edtDt: "2024-04-04T16:28:31.793Z",
      position: "1-644-308-4105 x88961",
    },
    {
      email: "Rosie.Hackett@yahoo.com",
      name: "BraunWiley",
      regDt: "2023-11-28T18:18:23.322Z",
      edtDt: "2023-07-25T21:49:28.816Z",
      position: "424.362.7947 x11850",
    },
  ];

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor("chk", {
      header: ({ table }) => (
        <p style={{ textAlign: "center" }}>
          <input
            id="header-checkbox"
            type="checkbox"
            checked={table.getIsAllPageRowsSelected()} // 전체 row가 선택되었는지 확인
            onChange={table.getToggleAllPageRowsSelectedHandler()} // 전체 row를 선택/해제하는 handler
          />
        </p>
      ),
      cell: (props) => {
        return (
          <p style={{ textAlign: "center" }}>
            <input
              id={`cell-checkbox-${props.row.id}`}
              type="checkbox"
              checked={props.row.getIsSelected()} // row가 선택되었는지 확인
              disabled={!props.row.getCanSelect()} // row가 선택 가능한지 확인
              onChange={props.row.getToggleSelectedHandler()} // row를 선택/해제하는 handler
            />
          </p>
        );
      },
      size: 30,
    }),
    columnHelper.accessor("email", { header: "이메일", size: 80, id: "6565656565" }),
    columnHelper.accessor("name", { header: "이름", size: 60 }),
    columnHelper.accessor("regDt", {
      header: "생성일",
      size: 300,
    }),
    columnHelper.accessor("edtDt", { header: "수정일", size: 120 }),
    columnHelper.accessor("position", {
      header: "역할",
      size: 120,
      cell: (props) => {
        return (
          <TableSelectbox>
            <option value="all">전체</option>
            <option value="user">USER</option>
            <option value="block">BLOCK</option>
            <option value="admin">ADMIN </option>
          </TableSelectbox>
        );
      },
    }),
  ];

  return (
    <>
      <ST.BasicTagItem $direction="column">
        <GnbMenu />
        <ST.BasicTagItem $pa={30}>
          {/* 페이지 타이틀 */}
          {/* 상단 버튼 */}
          <ST.FlexBox width={"100%"}>
            <ST.TextItem $fs={28} $fw="bold">
              USER LIST
            </ST.TextItem>
          </ST.FlexBox>
          <ST.FlexBox width={"100%"} $pb={10} $justify="right">
            <ST.Button width={120} $size={"middle"} $primary={true}>
              <XIcon />
              선택삭제
            </ST.Button>
            <ST.Button width={120} $ml={10} $size={"middle"} $fc={theme.color.white} $background={theme.color.failed}>
              <Edit />
              신규등록
            </ST.Button>
          </ST.FlexBox>

          {/* 테이블 리스트 */}
          <Table columns={columns} data={datas} />
        </ST.BasicTagItem>
      </ST.BasicTagItem>
    </>
  );
};

const TableSelectbox = styled.select``;

export default React.memo(UserList);
