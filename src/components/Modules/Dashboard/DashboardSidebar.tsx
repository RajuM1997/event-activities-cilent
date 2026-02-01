import { NavSection } from "@/types/dashboard.interface";
import { getNavItemsByRole } from "@/lib/navItems.config";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { getUserInfo } from "@/services/auth/getUserInfo";

const DashboardSidebar = async () => {
  const userInfo = await getUserInfo();

  const navItems: NavSection[] = getNavItemsByRole();
  const dashboardHome = "/admin/dashboard";
  return (
    <DashboardSidebarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    ></DashboardSidebarContent>
  );
};

export default DashboardSidebar;
