import { useEffect, useState } from "react";

export const useScrollToTop = () => {
  const [isVisibleArrow, setVisibleArrow] = useState<boolean>(false);

  const onScroll: EventListener = (e: Event) => {
    if (typeof window !== "undefined") {
      const window = e.currentTarget as Window;
      if (window.scrollY > 200) {
        setVisibleArrow(true);
        return;
      } else {
        setVisibleArrow(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return {
    isVisibleArrow,
    scrollToTop,
  };
};
