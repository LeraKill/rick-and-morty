import { ICharacterModel } from "@/types/types";
import React, { FC } from "react";
import CharacterDetails from "./CharacterDetails/CharacterDetails";
import { useCharacterCardStyle } from "./style";
import ArrowBack from "@/icon/ArrowBack.svg";

const CharacterCard: FC<ICharacterModel> = ({ data }) => {
  const { name, image } = data;

  return (
    <CardContainerSC>
      <GoBackSC>
        <GoBackLinkSC href="/">
          <GoBackSvgSC>
            <ArrowBack />
          </GoBackSvgSC>
          Go Back
        </GoBackLinkSC>
      </GoBackSC>
      <CardContentSC>
        <CardCharacterSC>
          <CharacterImgBlockSC>
            <CharacterImgSC src={image} />
          </CharacterImgBlockSC>
          <CharacterNameSC>{name}</CharacterNameSC>
        </CardCharacterSC>
        <CardDetailsSC>
          <CharacterDetails data={data} title="Information" />
        </CardDetailsSC>
      </CardContentSC>
    </CardContainerSC>
  );
};

const {
  CardContainerSC,
  GoBackSC,
  GoBackLinkSC,
  GoBackSvgSC,
  CardContentSC,
  CardCharacterSC,
  CharacterImgBlockSC,
  CharacterImgSC,
  CharacterNameSC,
  CardDetailsSC,
} = useCharacterCardStyle();
export default React.memo(CharacterCard);
