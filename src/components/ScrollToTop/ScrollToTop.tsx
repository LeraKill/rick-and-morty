import React, { FC } from "react";
import { useScrollToTopStyle } from "./style";
import ArrowUp from "../../assets/Icon/ArrowUp.svg";
import { useScrollToTop } from "./useScrollToTop";

const ScrollToTop: FC = () => {
  const { isVisibleArrow, scrollToTop } = useScrollToTop();

  return (
    <>
      {isVisibleArrow && (
        <ArrowBoxSC onClick={scrollToTop}>
          <ArrowSvgSC>
            <ArrowUp />
          </ArrowSvgSC>
        </ArrowBoxSC>
      )}
    </>
  );
};

const { ArrowBoxSC, ArrowSvgSC } = useScrollToTopStyle();
export default React.memo(ScrollToTop);
