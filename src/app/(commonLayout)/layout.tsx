import PublicFooter from "@/components/Shared/PublicFooter";
import PublicNavbar from "@/components/Shared/PublicNavbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicNavbar />
      <main className="min-h-[calc(100vh-385px)]"> {children}</main>

      <PublicFooter />
    </>
  );
};

export default CommonLayout;
