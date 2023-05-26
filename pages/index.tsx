import { useState } from "react";
import { Title, Button, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home() {
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
