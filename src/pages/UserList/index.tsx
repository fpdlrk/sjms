import React, { useCallback, useEffect, useRef, useState } from "react";
import * as ST from "../../styled/style";
import GnbMenu from "../../components/GnbMenu";
import { theme } from "../../styled/theme";
import { ReactComponent as XIcon } from "../../assets/img/x-02.svg";
import { ReactComponent as Edit } from "../../assets/img/edit-03.svg";
import Table from "../../components/Table/Table";
import { faker } from "@faker-js/faker";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { styled } from "styled-components";
import { useLodingStore, useMessageAlertStore, usePopuptStore } from "../../store/globalStore";
import { useShallow } from "zustand/react/shallow";
import Popup from "../../components/Popup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Selectbox from "../../components/Selectbox";

type Inputs = {
  userEmail: string;
  userName: string;
  userPos: string;
};

const UserList = () => {
  const submitDataRef = useRef<any>(null);
  const { setIsLoading, isLoading } = useLodingStore(useShallow((state) => ({ setIsLoading: state.setIsLoading, isLoading: state.isLoading })));
  const { setData, callback, setIsShow } = useMessageAlertStore(
    useShallow((state) => ({ setData: state.setData, callback: state.callback, setIsShow: state.setIsShow }))
  );

  const { setPopupData, isPopShow } = usePopuptStore(
    useShallow((state) => ({
      setPopupData: state.setPopupData,
      isPopShow: state.isPopShow,
    }))
  );

  const {
    control,
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitSuccessful, isSubmitting, isSubmitted },
  } = useForm<Inputs>();

  // 저장하기
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    submitDataRef.current = data;
    setData({
      isShow: true,
      msg: "저장하시겠습니까?",
      okBtn: true, // 확인 버튼 노출/미노출
      callback: saveCallback,
    });
  };

  const saveCallback = useCallback(() => {
    // 데이터 저장로직
    console.log("submitData ::::::::", submitDataRef.current);
    setPopupData({ isPopShow: false });
    setData({ isShow: false });
    resetField("userName");
    resetField("userEmail");
    resetField("userPos");
  }, []);

  // 회원추가
  const userCancelCallback = useCallback(() => {
    console.log("확인버튼 클릭");
    resetField("userName");
    resetField("userEmail");
    resetField("userPos");
    setPopupData({ isPopShow: false });
  }, []);

  const userAdd = useCallback(() => {
    setPopupData({ title: "회원추가", isPopShow: true, ok: onSubmit, isSubmit: true, cencel: userCancelCallback });
  }, []);

  // 회원삭제
  const userDelOkCallback = useCallback(() => {
    setIsShow(false);
  }, []);

  const userDel = useCallback(() => {
    setData({
      isShow: true,
      msg: "삭제하시겠습니까?",
      okBtn: true, // 확인 버튼 노출/미노출
      callback: userDelOkCallback,
    });
  }, []);

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
    columnHelper.accessor("email", { header: "이메일", size: 80, id: "email" }),
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
          <ST.TableSelectbox>
            <option value="all">전체</option>
            <option value="user">USER</option>
            <option value="block">BLOCK</option>
            <option value="admin">ADMIN </option>
          </ST.TableSelectbox>
        );
      },
    }),
  ];

  return (
    <>
      {isPopShow && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Popup>
            <ST.FormGroup $gapT={20}>
              <ST.FormItem>
                <ST.LabelText $display="block" htmlFor="userName">
                  이름
                </ST.LabelText>
                <ST.InputField
                  width={"100%"}
                  id={"userName"}
                  $pa={10}
                  type={"text"}
                  $size={"lager"}
                  placeholder={"이름을 입력하세요"}
                  {...register("userName", {
                    required: true,
                  })}
                  $invalid={errors.userName ? "true" : "false"}
                ></ST.InputField>
                {errors.userName && <ST.ErrorMsg>필수입력 사항입니다.</ST.ErrorMsg>}
              </ST.FormItem>

              <ST.FormItem>
                <ST.LabelText $display="block" htmlFor="userEmail">
                  이메일
                </ST.LabelText>
                <ST.InputField
                  width={"100%"}
                  id={"userEmail"}
                  $pa={10}
                  type={"text"}
                  $size={"lager"}
                  placeholder={"이메일을 입력하세요"}
                  {...register("userEmail", {
                    required: true,
                  })}
                  $invalid={errors.userEmail ? "true" : "false"}
                ></ST.InputField>
                {errors.userEmail && <ST.ErrorMsg>필수입력 사항입니다.</ST.ErrorMsg>}
              </ST.FormItem>

              <ST.FormItem>
                <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobauseYn" $ess={true}>
                  사용유무
                </ST.LabelText>
                <ST.TableSelectbox
                  $size="lager"
                  {...register("userPos", {
                    required: true,
                  })}
                >
                  <option value="all">전체</option>
                  <option value="user">USER</option>
                  <option value="block">BLOCK</option>
                  <option value="admin">ADMIN </option>
                </ST.TableSelectbox>
                {errors.userPos && <ST.ErrorMsg>필수입력 사항입니다.</ST.ErrorMsg>}
              </ST.FormItem>
            </ST.FormGroup>
          </Popup>
        </form>
      )}

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
            <ST.Button width={120} $size={"middle"} $primary={true} onClick={userDel}>
              <XIcon />
              선택삭제
            </ST.Button>
            <ST.Button width={120} $ml={10} $size={"middle"} $fc={theme.color.white} $background={theme.color.failed} onClick={userAdd}>
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

export default React.memo(UserList);
