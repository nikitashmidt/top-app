import cn from "classnames";

import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
  children,
  size = "medium",
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.little]: size === "little",
        [styles.medium]: size === "medium",
        [styles.big]: size === "big",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
