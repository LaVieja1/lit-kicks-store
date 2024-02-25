"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Brand } from "@/types";

import Button from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

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
    <nav className="ml-auto lg:mx-28 flex items-center space-x-4 lg:space-x-6 uppercase">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="text-sm font-bold block lg:hidden hover:scale-110">
            <Menu size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black text-white rounded-none">
          <DropdownMenuLabel>BRANDS</DropdownMenuLabel>
          <DropdownMenuSeparator className="border-b border-green" />
          {routes.map((route) => (
            <DropdownMenuItem
              key={route.href}
              className="bg-black hover:text-green hover:bg-white/50"
            >
              <Link
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors w-full",
                  route.active ? "text-green" : "text-white"
                )}
              >
                {route.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-bold transition-colors hover:text-green hidden lg:block",
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
