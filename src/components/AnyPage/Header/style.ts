import styled from "styled-components";

const HeaderSC = styled("header")`
  box-shadow: 0px 3px 6px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 26px;
`;

const HeaderMenuBurgerSC = styled("div")`
  width: 24px;
  height: 24px;
  background-color: red;
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

const HeaderLogoNavSC = styled("nav")`
  display: flex;
  align-items: center;
`;
const HeaderLogoLinkWrapperSC = styled("div")`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;
const HeaderLogoLinkSC = styled("a")`
  font-family: "Karla", sans-serif;
  font-size: 18px;
  transition: all 0.3s ease 0s;
  &:hover {
    text-decoration: underline;
  }
`;

export const useHeaderStyle = () => ({
  HeaderSC,
  HeaderMenuBurgerSC,
  HeaderContainerSC,
  HeaderContentSC,
  HeaderLogoWrapperSC,
  HeaderLogoSC,
  HeaderLogoNavSC,
  HeaderLogoLinkWrapperSC,
  HeaderLogoLinkSC,
});
