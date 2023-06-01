import cn from "classnames";

import { CardProps } from "./Card.props";
import styles from "./Card.module.css";

export const Card = ({
  children,
  color = "white",
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div {...props} className={cn(styles.card, className, {
      [styles.blue]: color === 'blue'
    })}>
      {children}
    </div>
  );
};
