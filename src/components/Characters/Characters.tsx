import React, { FC } from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import CharactersItem from "./CharactersItem/CharactersItem";
import { useCharactersStyle } from "./style";
import CharacterBlockImg from "../../assets/Icon/CharactersImg.svg";
import FilterByName from "../AnyPage/FilterByName/FilterByName";
import { useCharacters } from "./useCharacters";

const Characters: FC = () => {
  const { characters, showMore } = useCharacters();

  return (
    <>
      <CharactersContainerSC>
        <CharactersBlockImgSC>
          <CharacterBlockImg />
        </CharactersBlockImgSC>
        <FilterByName />
        <CharactersContentSC>
          {characters &&
            characters.map((item, index) => (
              <CharactersItem key={`${item.id}_${index}`} characters={item} />
            ))}
        </CharactersContentSC>
        <CharactersBtn type="button" onClick={showMore}>
          Load more
        </CharactersBtn>
      </CharactersContainerSC>
      <ScrollToTop />
    </>
  );
};

const {
  CharactersContainerSC,
  CharactersBlockImgSC,
  CharactersContentSC,
  CharactersBtn,
} = useCharactersStyle();
export default React.memo(Characters);
