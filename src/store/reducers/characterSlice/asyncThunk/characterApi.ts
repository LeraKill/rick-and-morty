import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@/store/store";

export const fetchCharacters = createAsyncThunk(
  "characterSlice/getCharacters",
  async (data, { getState, rejectWithValue }) => {
    const { page } = getState().characterSlice;
    try {
      const res = await fetch(
        ` https://rickandmortyapi.com/api/character?page=${page}`,
      );

      if (res.status) {
        const characters = await res.json();
        return characters;
      }
    } catch (error) {
      return rejectWithValue("ошибка cardsSlice/getCards");
    }
  },
);
