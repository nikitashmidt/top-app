import cn from "classnames";

import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

export const Tag = ({
  size = "medium",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.little]: size === "little",
        [styles.medium]: size === "medium",
        [styles.big]: size === "big",

        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <a target="_blank" href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
