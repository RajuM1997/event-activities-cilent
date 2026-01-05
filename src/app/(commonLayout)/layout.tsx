import PublicFooter from "@/components/Shared/PublicFooter";
import PublicNavbar from "@/components/Shared/PublicNavbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicNavbar />
      {children}
      <PublicFooter />
    </>
  );
};

export default CommonLayout;
