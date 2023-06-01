import cn from "classnames";

import { Card } from "../Card/Card";
import { HhDataProps } from "./HhData.props";
import { priceRu } from "../../helpers";
import RateIcon from "./rate.svg";

import styles from "./HhData.module.css";

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps) => {
  return (
    <div className={cn(styles.hh)}>
      <Card className={cn(styles.count)}>
        <div className={cn(styles.title)}>Всего вакансий</div>
        <div className={cn(styles.countValue)}> {count} </div>
      </Card>
      <Card className={cn(styles.salary)}>
        <div>
          <div className={cn(styles.title)}>Начальный</div>
          <div className={cn(styles.salaryValue)}>
            {" "}
            {priceRu(juniorSalary)}{" "}
          </div>
          <div className={cn(styles.rate)}>
            <RateIcon className={cn(styles.filled)} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>

        <div>
          <div className={cn(styles.title)}>Средний</div>
          <div className={cn(styles.salaryValue)}>{priceRu(middleSalary)}</div>
          <div className={cn(styles.rate)}>
            <RateIcon className={cn(styles.filled)} />
            <RateIcon className={cn(styles.filled)} />
            <RateIcon />
          </div>
        </div>

        <div>
          <div className={cn(styles.title)}>Профессионал</div>
          <div className={cn(styles.salaryValue)}>
            {priceRu(seniorSalary)} 
          </div>
          <div className={cn(styles.rate)}>
            <RateIcon className={cn(styles.filled)} />
            <RateIcon className={cn(styles.filled)} />
            <RateIcon className={cn(styles.filled)} />
          </div>
        </div>
      </Card>
    </div>
  );
};
