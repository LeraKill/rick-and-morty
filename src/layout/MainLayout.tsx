import React, { FC } from "react";
import Header from "../components/AnyPage/Header/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default React.memo(MainLayout);
