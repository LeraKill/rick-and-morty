import styled from "styled-components";

const ArrowBoxSC = styled("div")`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  z-index: 1000;
  box-shadow: 0 4px 39px 10px rgb(0 0 0 / 20%);
  cursor: pointer;
  display: block;
`;

const ArrowSvgSC = styled("div")`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const useScrollToTopStyle = () => ({ ArrowBoxSC, ArrowSvgSC });
