import React from "react";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";

// @ts-ignore
import cn from "classnames";

const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};

export default Footer;