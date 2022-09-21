import CharacterCard from "@/components/CharacterCard/CharacterCard";
import { getCharacterDynamicSSR } from "@/store/reducers/characterProcess/asyncThunk/characterProcessApi";
import { ICharacterModel } from "@/types/types";
import type { GetServerSideProps, NextPage } from "next";

const CharacterDynamicPage: NextPage<ICharacterModel> = ({ data }) => {
  return <CharacterCard data={data} />;
};

export default CharacterDynamicPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getCharacterDynamicSSR(context.query.id as string);
  return { props: { data } };
};
