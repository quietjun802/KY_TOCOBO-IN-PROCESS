import { useCallback, useEffect, useState } from "react";

export default function useSmoothScroll({
  threshold = 200,   // 버튼이 보이기 시작할 스크롤 위치(px)
  behavior = "smooth"
} = {}) {
  const [show, setShow] = useState(false);

  // 스크롤 이벤트 → 버튼 노출 여부 갱신
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    onScroll(); // 처음에도 체크
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  // 특정 ID로 스크롤
  const scrollTo = useCallback(
    (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior,
          block: "start"
        });
      }
    },
    [behavior]
  );

  // 맨 위로 스크롤
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior
    });
  }, [behavior]);

  return { show, scrollTo, scrollToTop };
}
