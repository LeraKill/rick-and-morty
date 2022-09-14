import styled from "styled-components";

interface IMenuProps {
  isOpenBurger: boolean;
}

const MenuSC = styled("nav")<IMenuProps>`
  margin-top: 0;
  @media (max-width: 600px) {
    margin-top: 60px;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    top: 0;
    transition: all 0.3s ease 0s;
    left: ${({ isOpenBurger }) => (isOpenBurger ? "0" : "-100%")};
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

const MenuListSC = styled("ul")`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 48px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

const MenuItemSC = styled("li")`
  &:not(:last-child) {
    margin: 0 24px 0 0;
  }
  @media (max-width: 600px) {
    &:not(:last-child) {
      margin: 0 0 48px 0;
    }
  }
`;

const MenuLinkSC = styled("a")`
  font-family: "Karla", sans-serif;
  font-size: 18px;
  transition: all 0.3s ease 0s;
  display: inline-block;
  &:hover {
    text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.green};
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const useMenuStyle = () => ({
  MenuSC,
  MenuListSC,
  MenuItemSC,
  MenuLinkSC,
});
