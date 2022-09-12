import { ICharactersProps } from "@/types/types";
import React, { FC } from "react";
import { useCharactersStyle } from "../style";

interface ICharactersItemProps {
  characters: {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: { name: string; url: string };
    name: string;
    origin: { name: string; url: string };
    species: string;
    status: string;
    type: string;
    url: string;
  };
}

const CharactersItem: FC<ICharactersItemProps> = ({ characters }) => {
  const { name, species, image } = characters;
  return (
    <CharactersItemSC>
      <CharactersImgBlockSC>
        <CharactersImgSC src={image} />
      </CharactersImgBlockSC>
      <CharactersInfoSC>
        <CharactersNameSC>{name}</CharactersNameSC>
        <CharactersTypeSC>{species}</CharactersTypeSC>
      </CharactersInfoSC>
    </CharactersItemSC>
  );
};

const {
  CharactersItemSC,
  CharactersImgBlockSC,
  CharactersImgSC,
  CharactersInfoSC,
  CharactersNameSC,
  CharactersTypeSC,
} = useCharactersStyle();

export default React.memo(CharactersItem);
