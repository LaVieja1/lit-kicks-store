"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Brand } from "@/types";

interface MainNavProps {
  data: Brand[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/brand/${route.id}`,
    label: route.name,
    active: pathname === `/brand/${route.id}`,
  }));

  return (
    <nav className="mx-28 flex items-center space-x-4 lg:space-x-6 uppercase">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-bold transition-colors hover:text-green",
            route.active ? "text-green" : "text-white"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
