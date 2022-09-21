import Characters from "@/components/Characters/Characters";
import { ICharactersProps } from "@/types/types";
import type { NextPage } from "next";

const Home: NextPage<ICharactersProps> = () => {
  return <Characters />;
};

export default Home;
