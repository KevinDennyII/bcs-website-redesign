import type { ReactNode } from "react";
import { V2Frame } from "./components";

export default function V2Layout({ children }: { children: ReactNode }) {
  return <V2Frame>{children}</V2Frame>;
}
