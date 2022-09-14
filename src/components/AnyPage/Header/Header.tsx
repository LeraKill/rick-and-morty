import React, { FC, useState } from "react";
import { useHeaderStyle } from "./style";
import { HeaderMenuArray } from "./useHeader";
import Logo from "../../../assets/Icon/Logo.svg";
import { useMobile } from "../../../hooks/useMediaQueries";

const Header: FC = () => {
  const isMobile = useMobile();
  const [openBurger, setOpenBurger] = useState<boolean>(false);

  const handleOpenBurger = () => {
    setOpenBurger((prevstate) => !prevstate);
  };

  return (
    <HeaderSC>
      <HeaderContainerSC>
        <HeaderContentSC>
          <HeaderLogoWrapperSC href="/">
            <HeaderLogoSC>
              <Logo />
            </HeaderLogoSC>
          </HeaderLogoWrapperSC>
          <HeaderMenuSC isMobile={isMobile} isOpenBurger={openBurger}>
            <HeaderMenuListSC isMobile={isMobile} isOpenBurger={openBurger}>
              {HeaderMenuArray &&
                HeaderMenuArray.map((item) => {
                  return (
                    <HeaderMenuItemSC key={item.id} isMobile={isMobile}>
                      <HeaderMenuLinkSC isMobile={isMobile} href={item.href}>
                        {item.category}
                      </HeaderMenuLinkSC>
                    </HeaderMenuItemSC>
                  );
                })}
            </HeaderMenuListSC>
          </HeaderMenuSC>
          {isMobile && (
            <HeaderMenuBurgerSC onClick={handleOpenBurger} isOpen={openBurger}>
              <HeaderMenuBurgerSpanSC isOpen={openBurger} />
            </HeaderMenuBurgerSC>
          )}
        </HeaderContentSC>
      </HeaderContainerSC>
    </HeaderSC>
  );
};

const {
  HeaderSC,
  HeaderMenuBurgerSC,
  HeaderMenuBurgerSpanSC,
  HeaderContainerSC,
  HeaderContentSC,
  HeaderLogoWrapperSC,
  HeaderLogoSC,
  HeaderMenuSC,
  HeaderMenuListSC,
  HeaderMenuItemSC,
  HeaderMenuLinkSC,
} = useHeaderStyle();

export default React.memo(Header);
