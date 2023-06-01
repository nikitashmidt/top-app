import { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";

import { Title, Button, Paragraph, Tag, Rating } from "../components";
import { MenuItem } from "../interfaces/menu.inteface";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState(4);

  return (
    <>
      <Title tag="h1">22</Title>
      <Button variant="primary" arrow="right">
        asdas
      </Button>
      <Button variant="ghost" className="button2" arrow="right">
        asdas
      </Button>
      <Paragraph>text</Paragraph>
      <Tag size="medium" color="red" href="www.google.com">
        hh.ru
      </Tag>
      <Tag size="little" color="green" href="www.google.com">
        -10 000 ₽
      </Tag>
      <Tag size="little" color="primary" href="www.google.com">
        Работа в Photoshop
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
