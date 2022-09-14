import React, { FC } from "react";
import { useHeaderStyle } from "./style";
import Logo from "../../../assets/Icon/Logo.svg";
import { useMobile } from "../../../hooks/useMediaQueries";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

const Header: FC = () => {
  const isMobile = useMobile();

  return (
    <HeaderSC>
      <HeaderContainerSC>
        <HeaderContentSC>
          <HeaderLogoWrapperSC href="/">
            <HeaderLogoSC>
              <Logo />
            </HeaderLogoSC>
          </HeaderLogoWrapperSC>
          {isMobile ? <HeaderMobile /> : <HeaderMenu isOpenBurger={false} />}
        </HeaderContentSC>
      </HeaderContainerSC>
    </HeaderSC>
  );
};

const {
  HeaderSC,
  HeaderContainerSC,
  HeaderContentSC,
  HeaderLogoWrapperSC,
  HeaderLogoSC,
  HeaderMenuSC,
  HeaderMenuListSC,
} = useHeaderStyle();

export default React.memo(Header);
