import { Menu } from "../Menu/Menu";
import cn from "classnames";

import { SidebarProps } from "./Sidebar.props";
import Logo from "../../layout/logo.svg";
import styles from "./Sidebar.module.css";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={cn(styles.logo)} />
      <div>поиск</div>
      <Menu />
    </div>
  );
};
