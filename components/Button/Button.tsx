import cn from "classnames";

import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import ArrowIcon from "../../public/arrow.svg";

export const Button = ({
  variant,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: variant === "primary",
        [styles.ghost]: variant === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span className={cn(styles.arrow, { [styles.down]: arrow === "down" })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
