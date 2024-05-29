import React, { useState } from "react";
import * as ST from "../../styled/style";
import { theme } from "../../styled/theme";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";
import { CheckByTypeBox } from "../../components/Checkbox";
import { CheckByTypeBoxGroup } from "../../components/Checkbox/ChekBoxGroup";

const dummyDataGenerate = () => {
  const daysEng = ["mo", "Feb", "we", "th", "fr", "sa", "su"];
  const daysKor = ["월", "화", "수", "목", "금", "토", "일"];
  const arr = Array(12)
    .fill("월")
    .map((item, index) => {
      return {
        label: daysKor[index],
        value: daysEng[index],
      };
    });
  return arr;
};
const days = [...dummyDataGenerate()];
const defaultDay = ["we", "Feb", "su", "fr"];

const Weekly = ({ control, register, errors }: any) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      {/* 시작종료일 */}
      <ST.FormItem>
        <ST.FlexBox $justify="space-between">
          <ST.FlexBox $justify="space-between">
            <ST.BasicTagItem $flex={1}>
              <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobSdt" $ess={true}>
                시작일
              </ST.LabelText>

              <ST.DatePickerWrap width={"100%"} $size={"middle"}>
                <Controller
                  name="jobSdt"
                  control={control}
                  render={({ field }) => {
                    const changeHandler = (value: any) => {
                      let year = value.getFullYear(); // 년도
                      let month = value.getMonth() + 1; // 월
                      let date = value.getDate(); // 날짜
                      let totalDate = `${year}${month}${date}`;
                      field.onChange(totalDate);
                      setStartDate(value);
                    };
                    return <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date: Date) => changeHandler(date)} />;
                  }}
                />
              </ST.DatePickerWrap>
            </ST.BasicTagItem>

            <ST.BasicTagItem width={100} $ml={5}>
              <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobSTime" $ess={true}>
                시작 시간
              </ST.LabelText>

              <ST.TimePickerWrap width={"100%"} $size={"middle"}>
                <Controller
                  name="jobSTime"
                  control={control}
                  render={({ field }) => {
                    const changeHandler = (value: any) => {
                      let totalTime = `${("0" + value.getHours()).slice(-2)}${("0" + value.getMinutes()).slice(-2)}`;
                      field.onChange(totalTime);
                      setStartDate(value);
                    };
                    return (
                      <DatePicker
                        selected={startDate}
                        onChange={(date: Date) => changeHandler(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={5}
                        timeCaption="Time"
                        timeFormat="HH:mm"
                        dateFormat="h:mm aa"
                      />
                    );
                  }}
                />
              </ST.TimePickerWrap>
            </ST.BasicTagItem>
          </ST.FlexBox>

          <ST.FlexBox $ml={15} $justify="space-between">
            <ST.BasicTagItem $flex={1}>
              <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobEdt" $ess={true}>
                종료일
              </ST.LabelText>

              <ST.DatePickerWrap width={"100%"} $size={"middle"}>
                <Controller
                  name="jobEdt"
                  control={control}
                  render={({ field }) => {
                    const changeHandler = (value: any) => {
                      let year = value.getFullYear(); // 년도
                      let month = value.getMonth() + 1; // 월
                      let date = value.getDate(); // 날짜
                      let totalDate = `${year}${month}${date}`;
                      field.onChange(totalDate);
                      setStartDate(value);
                    };
                    return <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date: Date) => changeHandler(date)} />;
                  }}
                />
              </ST.DatePickerWrap>
            </ST.BasicTagItem>

            <ST.BasicTagItem width={100} $ml={5}>
              <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobETime" $ess={true}>
                종료 시간
              </ST.LabelText>

              <ST.TimePickerWrap width={"100%"} $size={"middle"}>
                <Controller
                  name="jobETime"
                  control={control}
                  render={({ field }) => {
                    const changeHandler = (value: any) => {
                      let totalTime = `${("0" + value.getHours()).slice(-2)}${("0" + value.getMinutes()).slice(-2)}`;
                      field.onChange(totalTime);
                      setStartDate(value);
                    };
                    return (
                      <DatePicker
                        selected={startDate}
                        onChange={(date: Date) => changeHandler(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={5}
                        timeCaption="Time"
                        timeFormat="HH:mm"
                        dateFormat="h:mm aa"
                      />
                    );
                  }}
                />
              </ST.TimePickerWrap>
            </ST.BasicTagItem>
          </ST.FlexBox>
        </ST.FlexBox>
      </ST.FormItem>

      {/* 요일선택 */}
      <ST.FormItem>
        <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobSTime" $ess={true}>
          요일 선택
        </ST.LabelText>
        <ST.FlexBox>
          <CheckByTypeBoxGroup items={days} checkValue={defaultDay} />
        </ST.FlexBox>
      </ST.FormItem>

      {/* 반복주기 */}
      <ST.FormItem>
        <ST.BasicTagItem>
          <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="days" $ess={true}>
            반복횟수 및 주기
          </ST.LabelText>
          <ST.FlexBox $justify="space-between">
            <ST.FlexBox $direction="column">
              <ST.FlexBox $justify="space-between" $align="center">
                <ST.InputField
                  width={"100%"}
                  id={"days"}
                  $pa={10}
                  type={"number"}
                  $size={"middle"}
                  placeholder={"days"}
                  {...register("days", {
                    required: true,
                  })}
                  $invalid={errors.days ? "true" : "false"}
                ></ST.InputField>
                <ST.LabelText $pl={5} $fs={12} $fc={theme.color.fcFirst} $fw="bold">
                  Days
                </ST.LabelText>
              </ST.FlexBox>
              {errors.days && <ST.ErrorMsg>필수입력 사항입니다.</ST.ErrorMsg>}
            </ST.FlexBox>

            <ST.FlexBox $direction="column" $ml={10}>
              <ST.FlexBox $justify="space-between" $align="center">
                <ST.InputField
                  width={"100%"}
                  id={"hour"}
                  $pa={10}
                  type={"number"}
                  $size={"middle"}
                  placeholder={"hour"}
                  {...register("hour", {
                    required: true,
                  })}
                  $invalid={errors.hour ? "true" : "false"}
                ></ST.InputField>
                <ST.LabelText $pl={5} $fs={12} $fc={theme.color.fcFirst} $fw="bold">
                  Hour
                </ST.LabelText>
              </ST.FlexBox>
              {errors.hour && <ST.ErrorMsg>필수입력 사항입니다.</ST.ErrorMsg>}
            </ST.FlexBox>
          </ST.FlexBox>
        </ST.BasicTagItem>
      </ST.FormItem>
    </>
  );
};

export default Weekly;
