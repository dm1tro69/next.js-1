import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import { useState } from "react";
import Rating from "../components/Rating/Rating";
import Layout, { withLayout } from "../layout/Layout/Layout";

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <Htag tag={"h1"}>{counter}</Htag>
      <Button
        onClick={() => setCounter((prevState) => prevState + 1)}
        appearance={"primary"}
        arrow={"right"}
      >
        Text
      </Button>
      <Button appearance={"ghost"} arrow={"right"}>
        Text
      </Button>
      <P size={"m"}>
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <Tag size={"s"}>text</Tag>
      <Tag size={"m"} color={"red"}>
        textRed
      </Tag>
      <Rating rating={4} isEditable={true} />
    </>
  );
}
export default withLayout(Home);
