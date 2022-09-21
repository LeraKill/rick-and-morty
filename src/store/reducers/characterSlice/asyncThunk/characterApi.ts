import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@/store/store";
import { ICharactersProps } from "@/types/types";

interface IGetData {
  page: number;
}

export const fetchCharacters = createAsyncThunk<
  ICharactersProps,
  IGetData,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  "characterSlice/getCharacters",
  async (data, { getState, rejectWithValue }) => {
    const page = getState().characterSlice;
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${data.page}`,
      );

      if (res.status === 200) {
        const characters = await res.json();
        return characters;
      }
    } catch (error) {
      return rejectWithValue("ошибка characterSlice/getCharacters");
    }
  },
);

export const fetchShowMoreCharacters = createAsyncThunk<
  ICharactersProps,
  IGetData,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  "characterSlice/showMoreCharacters",
  async (data, { getState, rejectWithValue }) => {
    const page = getState().characterSlice;
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${data.page}`,
      );
      if (res.status === 200) {
        const characters = await res.json();
        return characters;
      }
    } catch (error) {
      return rejectWithValue("ошибка characterSlice/showMoreCharacters");
    }
  },
);
