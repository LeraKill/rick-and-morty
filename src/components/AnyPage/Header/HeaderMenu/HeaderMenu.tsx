import React, { FC } from "react";
import { HeaderMenuArray } from "../useHeader";
import MenuItem from "./MenuItem/MenuItem";
import { useMenuStyle } from "./style";

interface IHeaderMenuProps {
  isOpenBurger: boolean;
}

const HeaderMenu: FC<IHeaderMenuProps> = ({ isOpenBurger }) => {
  return (
    <MenuSC isOpenBurger={isOpenBurger}>
      <MenuListSC>
        {HeaderMenuArray &&
          HeaderMenuArray.map((item) => {
            return (
              <MenuItem
                key={item.id}
                href={item.href}
                category={item.category}
              />
            );
          })}
      </MenuListSC>
    </MenuSC>
  );
};

const { MenuSC, MenuListSC } = useMenuStyle();
export default React.memo(HeaderMenu);
