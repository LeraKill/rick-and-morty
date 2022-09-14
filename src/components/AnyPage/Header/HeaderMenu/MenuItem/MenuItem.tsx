import React, { FC } from "react";
import { useMenuStyle } from "../style";

interface IMenuItemProps {
  href: string;
  category: string;
}

const MenuItem: FC<IMenuItemProps> = ({ href, category }) => {
  return (
    <MenuItemSC>
      <MenuLinkSC href={href}>{category}</MenuLinkSC>
    </MenuItemSC>
  );
};

const { MenuItemSC, MenuLinkSC } = useMenuStyle();
export default React.memo(MenuItem);
