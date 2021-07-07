import React from "react";
import styles from "./P.module.css";
import { IProps } from "./P,props";

// @ts-ignore
import cn from "classnames";

const P = ({
  size = "m",
  children,
  className,
  ...props
}: IProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === "s",
        [styles.l]: size === "l",
        [styles.m]: size === "m",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
