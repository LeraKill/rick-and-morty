import React, { FC } from "react";
import { useHeaderStyle } from "./style";
import { HeaderMenuArray } from "./useHeader";
import Logo from "../../../assets/Icon/Logo.svg";

const Header: FC = () => {
  return (
    <HeaderSC>
      <HeaderContainerSC>
        <HeaderContentSC>
          <HeaderMenuBurgerSC />
          <HeaderLogoWrapperSC href="/">
            <HeaderLogoSC>
              <Logo />
            </HeaderLogoSC>
          </HeaderLogoWrapperSC>
          <HeaderLogoNavSC>
            {HeaderMenuArray &&
              HeaderMenuArray.map((item) => {
                return (
                  <HeaderLogoLinkWrapperSC key={item.id}>
                    <HeaderLogoLinkSC href={item.href}>
                      {item.category}
                    </HeaderLogoLinkSC>
                  </HeaderLogoLinkWrapperSC>
                );
              })}
          </HeaderLogoNavSC>
        </HeaderContentSC>
      </HeaderContainerSC>
    </HeaderSC>
  );
};

const {
  HeaderSC,
  HeaderMenuBurgerSC,
  HeaderContainerSC,
  HeaderContentSC,
  HeaderLogoWrapperSC,
  HeaderLogoSC,
  HeaderLogoNavSC,
  HeaderLogoLinkWrapperSC,
  HeaderLogoLinkSC,
} = useHeaderStyle();

export default React.memo(Header);
