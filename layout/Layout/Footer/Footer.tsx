import React from "react";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";
import { format } from "date-fns";

// @ts-ignore
import cn from "classnames";

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </footer>
  );
};

export default Footer;
