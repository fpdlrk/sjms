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

const useValidate = () => {
  const [isStop, setIsStop] = useState(false);
  const { isShow, setIsShow, setMsg, setType }: any = useMessageAlertStore();
  const isEmpty = (value: string) => {
    if (!!value === false) return true;
    return false;
  };

  const emptyCheck = ({ type, value, msg, callback }: validateIprops) => {};
  return { emptyCheck, isEmpty };
};

export default useValidate;
