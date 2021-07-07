import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m";
  children: ReactNode;
  color?: "ghost" | "red" | "green" | "gray" | "primary";
  href?: string;
}
