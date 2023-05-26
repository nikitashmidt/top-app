import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: "little" | "medium" | "big";
  children: React.ReactNode;
}
