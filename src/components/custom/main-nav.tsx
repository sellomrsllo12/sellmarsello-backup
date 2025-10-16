"use client";

import useMainContext from "@/hooks/use-main-context";
import Logo from "./logo";
import {
  Sidebar,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from "../ui/sidebar";
import { Link2, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export interface MainNavItem {
  label: React.ReactNode;
  href: string;
}

const items: MainNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: (
      <div className="flex flex-row items-center space-x-2">
        <p>Shop</p>
        <Link2 className="w-4 h-4" />
      </div>
    ),
    href: "/shop",
  },
];

function MainNavItem({ label, href }: MainNavItem): React.ReactNode {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={cn(
          pathname === href && "text-ag-primary",
          "font-semibold",
          "hover:text-ag-primary duration-300"
        )}
      >
        {label}
      </div>
    </Link>
  );
}

export default function MainNav() {
  const { showNavbar } = useMainContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();

  if (!showNavbar) {
    return null;
  }

  return (
    <nav className="w-screen px-12 py-6 flex flex-row justify-between items-center bg-ag-secondary-bg text-white drop-shadow-xl sticky top-0 left-0 z-50">
      {/* Desktop: Brand */}
      <Logo className="max-md:hidden" />

      {/* Desktop: Options */}
      <div className="max-md:hidden flex flex-row items-center justify-evenly space-x-16">
        {items.map((item, idx) => (
          <MainNavItem {...item} key={idx} />
        ))}
      </div>

      {/* Mobile: Hamburger */}
      {isMobile && (
        <Menu
          className="hidden max-md:block cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}

      {/* Mobile: Sidebar - RENDERED UNCONDITIONALLY */}
      {/* The 'open' prop now solely controls visibility. */}
      {/* <SidebarProvider open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <Sidebar>
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <SidebarGroup>
            {items.map((item, idx) => (
              <MainNavItem {...item} key={idx} />
            ))}
          </SidebarGroup>
        </Sidebar>
      </SidebarProvider> */}

      {/* Both: Profile / Sign Up */}
      <Button>Sign Up</Button>
    </nav>
  );
}
