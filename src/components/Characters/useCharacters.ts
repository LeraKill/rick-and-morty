import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import {
  fetchCharacters,
  fetchShowMoreCharacters,
} from "@/store/reducers/characterSlice/asyncThunk/characterApi";
import { useEffect } from "react";

export const useCharacters = () => {
  const dispatch = useAppDispatch();
  const { info, characters, isLoading, page } = useAppSelector(
    (state) => state.characterSlice,
  );

  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, []);

  const showMore = () => {
    dispatch(fetchShowMoreCharacters(page));
  };

  return {
    characters,
    showMore,
  };
};
