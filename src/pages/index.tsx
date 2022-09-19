import Characters from "@/components/Characters/Characters";
import { ICharactersProps } from "@/types/types";
import type { NextPage } from "next";

export const defaultEndpoint: string =
  "https://rickandmortyapi.com/api/character";

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const characters = await res.json();
  return { props: { characters } };
}

const Home: NextPage<ICharactersProps> = ({ characters }) => {
  return <Characters characters={characters} />;
};

export default Home;
