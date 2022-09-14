import { ICharactersProps } from "@/types/types";
import React, { FC } from "react";
import CharactersItem from "./CharactersItem/CharactersItem";
import { useCharactersStyle } from "./style";

const Characters: FC<ICharactersProps> = ({ characters }) => {
  const { results } = characters;
  return (
    <CharactersContainerSC>
      Characters
      <CharactersContentSC>
        {results &&
          results.map((item) => (
            <CharactersItem key={item.id} characters={item} />
          ))}
      </CharactersContentSC>
    </CharactersContainerSC>
  );
};

const { CharactersContainerSC, CharactersContentSC } = useCharactersStyle();
export default React.memo(Characters);
