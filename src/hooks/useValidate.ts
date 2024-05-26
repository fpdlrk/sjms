import React, { useState } from "react";
import { useMessageAlertStore } from "../store/globalStore";

export type validateIprops = {
  type: string;
  value: string;
  checkType: string; // require | email | number | ""
  msg: string;
  callback?: () => void;
  rule?: (data: any) => boolean;
};

/**
 * checkType require : 필수입력사항
 * checkType email : 이메밀 체크
 * checkType number : 숫자만 입력가능
 * checkType "" : 기본 입력 메세지
 */

/**
 *  로직은 따로 구현 바랍니다.
 */

const useValidate = () => {
  // const [rtVal, setRtVal] = useState<validateIprops>();
  const [isStop, setIsStop] = useState(false);
  const { isShow, setIsShow, setMsg, setType, setOkHandler }: any = useMessageAlertStore();
  const required = ({ type, value, msg, callback }: validateIprops) => {
    if (!!value) {
      return false;
    }
  };

  const emptyCheck = ({ type, value, msg, callback }: validateIprops) => {};
  return [emptyCheck, required];
};

export default useValidate;
