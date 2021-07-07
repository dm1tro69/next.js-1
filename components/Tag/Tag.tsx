import React from "react";
import styles from "./Tag.module.css";
import { IProps } from "./Tag,props";

// @ts-ignore
import cn from "classnames";

const Tag = ({
  size = "m",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: IProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
        [styles.gray]: color === "gray",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
