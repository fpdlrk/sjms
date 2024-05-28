import { useCallback, useEffect, useState } from "react";

const useTooltip = () => {
  const tooltipItems = document.querySelectorAll("[data-tooltip]");
  const [isShow, setIsShow] = useState(false);
  const [tooltip, setTooltip] = useState({
    content: "",
    x: 0,
    y: 0,
    clientWidth: 0,
    winWidth: window.innerWidth,
  });

  const winResizeWidth = () => {};

  const getItem = useCallback((e: any) => {
    setIsShow(true);
    setTooltip({
      ...tooltip,
      content: e.currentTarget.dataset.tooltip,
      x: e.pageX,
      y: e.pageY,
      clientWidth: e.currentTarget.clientWidth,
      winWidth: window.innerWidth,
    });
  }, []);

  const itemMouseOut = useCallback((e: any) => {
    setIsShow(false);
  }, []);

  tooltipItems.forEach((item) => {
    item.addEventListener("blur", itemMouseOut);
    item.addEventListener("mouseout", itemMouseOut);
    item.addEventListener("mousemove", getItem);
  });

  useEffect(() => {
    tooltipItems.forEach((item) => {
      item.removeEventListener("blur", itemMouseOut);
      item.removeEventListener("mouseout", itemMouseOut);
      item.removeEventListener("mouseover", getItem);
    });
    window.addEventListener("resize", winResizeWidth);
    return () => {
      tooltipItems.forEach((item) => {
        item.removeEventListener("blur", itemMouseOut);
        item.removeEventListener("mouseout", itemMouseOut);
        item.removeEventListener("mouseover", getItem);
      });
      window.removeEventListener("resize", winResizeWidth);
    };
  }, []);

  return {
    tooltip,
    isShow,
  };
};

export default useTooltip;
