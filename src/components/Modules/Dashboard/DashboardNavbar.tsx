import { getUserInfo } from "@/services/auth/getUserInfo";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { IUser } from "@/types/user.interface";
import { getNavItemsByRole } from "@/lib/navItems.config";
import { NavSection } from "@/types/dashboard.interface";

const DashboardNavbar = async () => {
  const userInfo = (await getUserInfo()) as IUser;
  const navItems: NavSection[] = getNavItemsByRole();
  return <DashboardNavbarContent userInfo={userInfo} navItems={navItems} />;
};

export default DashboardNavbar;
