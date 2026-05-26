"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  const pathname = usePathname();
  const isV2Experience = pathname.startsWith("/v2");

  if (isV2Experience) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader activePath={pathname} />
      {children}
      <SiteFooter />
    </>
  );
}
