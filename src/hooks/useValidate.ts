import { useState } from "react";
import useMessageAlertStore from "../store/globalStore";

export type validateIprops = {
  value: string;
  checkType: string; // require | email | number | ""
  msg: string;
  rule?: (data: any) => void;
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

const useValidate = (props: validateIprops[]) => {
  // const [rtVal, setRtVal] = useState<validateIprops>();
  const [isStop, setIsStop] = useState(false);
  const { isShow, setIsShow, setData, setType, setOkHandler }: any = useMessageAlertStore();
  const validateHandler = (type: string, callback?: any) => {
    for (let i = 0; i < props.length; i++) {
      if (type === "confirm" && callback) {
        setOkHandler(callback);
      }

      if (!!props[i].value === false && props[i].checkType === "require") {
        setType(type);
        setIsShow(true);
        setData(props[i]);
        return false;
      }

      if (!!props[i].value === false && props[i].checkType === "email") {
        setType(type);
        setIsShow(true);
        setData(props[i]);
        return false;
      }

      if (!!props[i].value === false && props[i].checkType === "number") {
        setType(type);
        setIsShow(true);
        setData(props[i]);
        return false;
      }

      if (props[i].value !== "" && props[i].checkType === "callback") {
        setType(type);
        props[i].rule?.(props[i]);
        console.log("sdsd", props[i].value, props[i].checkType);
        return props[i].rule?.(props[i]);
      }

      if (!!props[i].value === false && props[i].checkType === "") {
        setType(type);
        setIsShow(true);
        setData(props[i]);
        return false;
      }
    }
    return true;
  };
  return { validateHandler };
};

export default useValidate;
