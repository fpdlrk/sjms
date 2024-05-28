import React, { useState } from "react";
import * as ST from "../../styled/style";
import { theme } from "../../styled/theme";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";

const Once = ({ control }: any) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      {/* 시작종료일 */}
      <ST.FormItem>
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

          <ST.BasicTagItem width={100} $ml={10}>
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
      </ST.FormItem>
    </>
  );
};

export default Once;
