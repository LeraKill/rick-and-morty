import React, { FC } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default React.memo(MainLayout);
