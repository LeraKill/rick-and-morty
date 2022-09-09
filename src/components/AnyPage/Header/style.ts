import styled from "styled-components";

const HeaderSC = styled("header")`
  box-shadow: 0px 3px 6px 4px ${({ theme }) => theme.colors.lightBlack};
  margin-bottom: 26px;
`;

interface IProps {
  isOpen: boolean;
}

const HeaderMenuBurgerSC = styled("div")<IProps>`
  width: 24px;
  height: 18px;
  cursor: pointer;
  position: relative;
  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.darkGray};
    position: absolute;
    left: 0;
    transition: transform 0.5s ease-in-out;
    transform-origin: 0% 100%;
  }
  &::before {
    top: 0;
    transform: ${({ isOpen }) => (isOpen ? " rotate(45deg)" : "none")};
  }
  &::after {
    content: "";
    bottom: 0;
    transform: ${({ isOpen }) => (isOpen ? " rotate(-45deg)" : "none")};
  }
`;

const HeaderMenuBurgerSpanSC = styled("span")<IProps>`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  position: absolute;
  top: 50%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? " scale(0)" : "translateY(-50%)")};
  left: 0;
`;

const HeaderContainerSC = styled("div")`
  height: 60px;
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 10px;
`;

const HeaderContentSC = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const HeaderLogoWrapperSC = styled("a")``;

const HeaderLogoSC = styled("div")`
  width: 46px;
  height: 49px;
`;

interface INavProps {
  isMobile: boolean;
  isOpenBurger: boolean;
}

const HeaderNavSC = styled("nav")<INavProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  margin-top: ${({ isMobile }) => (isMobile ? "250px" : "0px")};
  width: ${({ isMobile }) => (isMobile ? "100%" : "")};
  height: ${({ isMobile }) => (isMobile ? "100%" : "")};
  background-color: ${({ isMobile }) => (isMobile ? "white" : "none")};
  transition: transform 0.5s ease-in-out;
  transform: ${({ isOpenBurger, isMobile }) =>
    isMobile
      ? isOpenBurger
        ? "translate(0)"
        : "translate(-150%)"
      : "translate(0)"};
`;

interface ILinkProps {
  isMobile: boolean;
}

const HeaderLinkWrapperSC = styled("div")<ILinkProps>`
  &:not(:last-child) {
    margin: ${({ isMobile }) => (isMobile ? "0 0 48px 0" : "0 24px 0 0 ")};
  }
`;
const HeaderLinkSC = styled("a")<ILinkProps>`
  font-family: "Karla", sans-serif;
  font-size: ${({ isMobile }) => (isMobile ? "24px" : "18px ")};
  transition: all 0.3s ease 0s;
  &:hover {
    text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.green};
  }
`;

export const useHeaderStyle = () => ({
  HeaderSC,
  HeaderMenuBurgerSC,
  HeaderMenuBurgerSpanSC,
  HeaderContainerSC,
  HeaderContentSC,
  HeaderLogoWrapperSC,
  HeaderLogoSC,
  HeaderNavSC,
  HeaderLinkWrapperSC,
  HeaderLinkSC,
});
