import React, { FC, useEffect } from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import CharactersItem from "./CharactersItem/CharactersItem";
import { useCharactersStyle } from "./style";
import CharacterBlockImg from "../../assets/Icon/CharactersImg.svg";
import FilterByName from "../AnyPage/FilterByName/FilterByName";

import { fetchCharacters } from "@/store/reducers/characterSlice/asyncThunk/characterApi";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { useFormContext } from "react-hook-form";

const Characters: FC = () => {
  const dispatch = useAppDispatch();
  const { characters, isLoading } = useAppSelector(
    (state) => state.characterSlice,
  );

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  // const { handleSubmit } = useFormContext();

  return (
    <>
      <CharactersContainerSC>
        <CharactersBlockImgSC>
          <CharacterBlockImg />
        </CharactersBlockImgSC>
        <FilterByName />
        <CharactersContentSC>
          {characters &&
            characters.map((item) => (
              <CharactersItem key={item.id} characters={item} />
            ))}
        </CharactersContentSC>
        {/* <CharactersBtn type="button" onClick={handleLoadMore}>
          Load more
        </CharactersBtn> */}
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
