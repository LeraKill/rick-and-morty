import { ICharactersProps } from "@/types/types";
import React, { FC } from "react";
import CharactersItem from "./CharactersItem/CharactersItem";
import { useCharactersStyle } from "./style";
import { useCharacters } from "./useCharacters";

const Characters: FC<ICharactersProps> = ({ characters }) => {
  const { results, handleLoadMore } = useCharacters({ characters });

  return (
    <CharactersContainerSC>
      Characters
      <CharactersContentSC>
        {results &&
          results.map((item) => (
            <CharactersItem key={item.id} characters={item} />
          ))}
      </CharactersContentSC>
      <CharactersBtn type="button" onClick={handleLoadMore}>
        Load more
      </CharactersBtn>
    </CharactersContainerSC>
  );
};

const { CharactersContainerSC, CharactersContentSC, CharactersBtn } =
  useCharactersStyle();
export default React.memo(Characters);
