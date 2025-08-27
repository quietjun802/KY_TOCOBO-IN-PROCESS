import React from "react";
import useSmoothScroll from "../hooks/useSmoothScroll"; // 방금 만든 훅
import "../styles/components/topbtn.scss";

const TopBtn = () => {
  // show: 버튼 노출 여부, scrollToTop: 위로 이동 함수
  const { show, scrollToTop } = useSmoothScroll({ threshold: 200 });

  if (!show) return null; // 아직 스크롤이 threshold보다 작으면 버튼 숨김

  return (
    <button
      className={`top-btn ${show ? "fade-in" : "fade-out"}`}
      onClick={scrollToTop}
      aria-label="위로 가기"
    >
      🦊
    </button>
  );
};

export default TopBtn;
