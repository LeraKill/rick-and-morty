import React, { FC, useState } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { useHeaderStyle } from "../style";

const HeaderMobile: FC = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false);

  const handleOpenBurger = () => {
    setOpenBurger((prevstate) => !prevstate);
    document.body.classList.toggle("body_blocked");
  };

  return (
    <>
      <HeaderMenu isOpenBurger={openBurger} />
      <HeaderMenuBurgerSC onClick={handleOpenBurger} isOpen={openBurger}>
        <HeaderMenuBurgerSpanSC isOpen={openBurger} />
      </HeaderMenuBurgerSC>
    </>
  );
};

const { HeaderMenuBurgerSC, HeaderMenuBurgerSpanSC } = useHeaderStyle();

export default React.memo(HeaderMobile);
