import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import { useState } from "react";
import Rating from "../components/Rating/Rating";
import Layout, { withLayout } from "../layout/Layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
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
      <ul>
        {menu.map((m) => {
          return <li key={m._id.secondCategory}>{m._id.secondCategory}</li>;
        })}
      </ul>
    </>
  );
}
export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
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
