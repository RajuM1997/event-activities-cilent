import { NavSection } from "@/types/dashboard.interface";

// export const getCommonNavItems = (role: any): NavSection[] => {
//   const defaultDashboard = getDefaultDashboardRoute();

//   return [
//     {
//       items: [
//         {
//           title: "Dashboard",
//           href: defaultDashboard,
//           icon: "LayoutDashboard",
//           roles: ["PATIENT", "DOCTOR", "ADMIN"],
//         },
//         {
//           title: "My Profile",
//           href: `/my-profile`,
//           icon: "User",
//           roles: ["PATIENT", "DOCTOR", "ADMIN"],
//         },
//       ],
//     },
//     {
//       title: "Settings",
//       items: [
//         {
//           title: "Change Password",
//           href: "/change-password",
//           icon: "Settings", // ✅ String
//           roles: ["PATIENT"],
//         },
//       ],
//     },
//   ];
// };

export const doctorNavItems: NavSection[] = [
  {
    title: "Patient Management",
    items: [
      {
        title: "Appointments",
        href: "/doctor/dashboard/appointments",
        icon: "Calendar", // ✅ String
        badge: "3",
        roles: ["DOCTOR"],
      },
      {
        title: "My Schedules",
        href: "/doctor/dashboard/my-schedules",
        icon: "Clock", // ✅ String
        roles: ["DOCTOR"],
      },
      {
        title: "Prescriptions",
        href: "/doctor/dashboard/prescriptions",
        icon: "FileText", // ✅ String
        roles: ["DOCTOR"],
      },
    ],
  },
];

export const adminNavItems: NavSection[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Users",
        href: "/admin/dashboard/manage-users",
        icon: "Stethoscope", // ✅ String
        roles: ["ADMIN"],
      },
      {
        title: "Hosts",
        href: "/admin/dashboard/manage-hosts",
        icon: "Users", // ✅ String
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "Events",
    items: [
      {
        title: "Manage Events",
        href: "/admin/dashboard/manage-events",
        icon: "Calendar", // ✅ String
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "User Profile",
    items: [
      {
        title: "User Profile",
        href: "/profile",
        icon: "Stethoscope", // ✅ String
        roles: ["ADMIN"],
      },
    ],
  },
];

export const getNavItemsByRole = (): NavSection[] => {
  //   const commonNavItems = getCommonNavItems(role);

  //   switch (role) {

  return [...adminNavItems];
  //   }
};
