import cn from "classnames";
import { format } from "date-fns";

import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={cn(styles.copyright)}>
        OwlTop © 2020 - {format(new Date(), "yyy")} Все права защищены
      </div>
      <a href="#" target="_blank" className={cn(styles.terms)}>
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank" className={cn(styles.policy)}>
        Политика конфиденциальности{" "}
      </a>
    </footer>
  );
};
