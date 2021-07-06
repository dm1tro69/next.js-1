import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag={"h1"}>Text</Htag>
      <Button appearance={"primary"}>Text</Button>
      <Button appearance={"ghost"}>Text</Button>
    </>
  );
}
