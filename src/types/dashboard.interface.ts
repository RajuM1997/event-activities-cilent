// import { UserRole } from "@/lib/auth-utils";

export interface NavItem {
  title: string;
  href: string;
  icon: string;
  badge?: string | number;
  description?: string;
  roles: string[];
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}
