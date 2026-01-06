"use client";

import { logoutUser } from "@/services/auth/logoutUser";
import { Button } from "../ui/button";

const LogoutButton = () => {
  const handleLogout = async () => {
    await logoutUser();
    console.log("logout btn click");
  };
  return (
    <Button variant={"outline"} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
