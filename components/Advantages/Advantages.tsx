import cn from "classnames";

import { Title } from "../Title/Title";
import { Paragraph } from "../Paragraph/Paragraph";
import { IAdvantagesProps } from "./Advantages.props";
import DoneIcon from "./done.svg";

import styles from "./Advantages.module.css";

export const Advantages = ({ advantages }: IAdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={cn(styles.advantage)}>
          <DoneIcon />
          <div className={cn(styles.title)}>{a.title}</div>
          <hr className={cn(styles.vline)} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
