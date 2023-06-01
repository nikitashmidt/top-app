import cn from "classnames";
import { v4 as uuid } from "uuid";

import { TopPageComponentProps } from "./TopPageComponent.props";
import { Title } from "../../components/Title/Title";
import { Tag, HhData, Advantages, Paragraph } from "../../components";
import { TopLevelCategory } from "../../interfaces/page.interface";

import styles from "./TopPageComponent.module.css";

export const TopPageComponent = ({
  products,
  page,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  console.log(products.map((item) => item.tags));
  return (
    <div className={cn(styles.wrapper)}>
      <div className={cn(styles.title)}>
        <Title tag="h1">{page.title}</Title>
        <Tag color="gray" size="medium">
          {products.length}
        </Tag>
        <span>Сортировка</span>
      </div>

      <div>
        {products.map((p) => (
          <div key={uuid()}> {p.title} </div>
        ))}
      </div>

      <div className={cn(styles.hhTitle)}>
        <Title tag="h2">Вакансии - {page.category}</Title>
        <Tag color="red" size="medium">
          hh.ru
        </Tag>
      </div>

      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Title tag="h2">Преимущства</Title>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && <div className={cn(styles.seo)} dangerouslySetInnerHTML={{ __html: page.seoText }} /> }

      <Title tag="h2">Получаемые навыки</Title>

      {page.tags.map((t) => (
        <Tag key={t} color="primary">{t}</Tag>
      ))}
    </div>
  );
};
