import { useEffect, useLayoutEffect, useState } from "react";
const randomId = Math.floor(Math.random() * 10000000);
const usePositionInfo = () => {
  const winW = window.innerWidth;
  const [targetWidth, setTargetWidth] = useState(0);
  const [pos, setPos] = useState({
    isShow: false,
    x: 0,
    y: 0,
  });
  const posLocation = (e: React.MouseEvent<HTMLElement>) => {
    setPos({ isShow: true, x: e.currentTarget.offsetLeft, y: e.currentTarget.offsetTop });
    setTargetWidth(e.currentTarget.offsetWidth);
    e.preventDefault();
  };
  const objRemove = (e: any) => {
    setTimeout(() => {
      setPos({ ...pos, isShow: false });
    }, 300);
    e.preventDefault();
  };

  useLayoutEffect(() => {
    const targetObj = document.getElementById(randomId.toString());
    if (targetObj) {
      targetObj.focus();
      if (pos.x + targetObj.offsetWidth > winW) {
        setPos({ ...pos, x: pos.x - targetObj.offsetWidth + targetWidth });
      }
      //   console.log(targetObj.offsetWidth, winW, pos.x, pos.x + targetObj.offsetWidth, pos.x - targetObj.offsetWidth, targetWidth);
    }
  });
  return {
    posLocation,
    objRemove,
    pos,
    randomId,
  };
};

export default usePositionInfo;
