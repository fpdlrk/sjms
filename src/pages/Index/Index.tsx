import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IndexPage = () => {
  const navigate = useNavigate();
  const movePage = () => {
    // 로그인이 되었는지 체크 후 페이지 이동
    if (false) {
      navigate("/Dashboard");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    movePage();
  }, []);

  return <div></div>;
};

export default IndexPage;
