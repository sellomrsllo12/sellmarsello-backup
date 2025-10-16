"use client";

import useMainContext from "@/hooks/use-main-context";
import Link from "next/link";
import Logo from "./logo";

export default function MainFooter() {
  const { showFooter } = useMainContext();

  if (!showFooter) {
    return null;
  }

  return (
    <footer className="flex items-center w-screen bg-ag-secondary-bg px-12 py-12 drop-shadow-xl">
      <div>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Logo className="text-white" />
            <p className="mt-1 max-w-md text-muted-foreground">
              Tools for sustainable, profitable farming—built for every season.
            </p>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} AgRimbun. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
