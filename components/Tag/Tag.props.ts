import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "little" | "medium" | "big";
  children: React.ReactNode;
  color: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
}
