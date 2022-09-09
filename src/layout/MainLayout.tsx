import React, { FC } from "react";
import Theme from "theme/Theme";
import Header from "../components/AnyPage/Header/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Theme>
      <Header />
      <main>{children}</main>
    </Theme>
  );
};

export default React.memo(MainLayout);
