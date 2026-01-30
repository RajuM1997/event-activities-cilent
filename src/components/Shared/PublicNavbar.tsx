import Link from "next/link";
import { Button } from "@/components/ui/button";

import { getCookie } from "@/services/auth/tokenHandlers";
import LogoutButton from "./LogoutButton";
import { getUserInfo } from "@/services/auth/getUserInfo";
import MobileMenu from "./MobileMenu";

const PublicNavbar = async () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Explore Events", href: "/events" },
    { name: "Become a Host", href: "/become-a-host", role: "USER" },
    { name: "My Join Events", href: "/events/my-events", role: "USER" },
    { name: "My Events", href: "/host/my-events", role: "HOST" },
    { name: "Create Event", href: "/host/create-event", role: "HOST" },
    { name: "Dashboard", href: "/admin/dashboard", role: "ADMIN" },
    { name: "Profile", href: "/profile" },
  ];
  const accessToken = await getCookie("accessToken");
  const userInfo = await getUserInfo();

  return (
    <header className="sticky to-0 z-50 border-b w-full bg-background/95 px-4 backdrop-blur dark:bg-background/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div>
          <Link
            href={"/"}
            className="flex items-center justify-center text-xl font-bold text-primary"
          >
            JoinUp
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navItems.map((item) => {
              return item?.role === userInfo.role ? (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : (
                !item.role && userInfo && (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              );
            })}
          </ul>
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          {accessToken ? (
            <LogoutButton />
          ) : (
            <Link href={"/login"}>
              <Button>Login</Button>
            </Link>
          )}
        </div>
        {/* mobile menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
