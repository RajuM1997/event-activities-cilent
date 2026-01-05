import { NavSection } from "@/types/dashboard.interface";
import { getNavItemsByRole } from "@/lib/navItems.config";
import DashboardSidebarContent from "./DashboardSidebarContent";

const DashboardSidebar = async () => {
  const userInfo = {
    name: "raju",
    role: "ADMIN",
  };
  const navItems: NavSection[] = getNavItemsByRole();
  const dashboardHome = "ADMIN";
  return (
    <DashboardSidebarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    ></DashboardSidebarContent>
  );
};

export default DashboardSidebar;
