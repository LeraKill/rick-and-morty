import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./asyncThunk/characterApi";

interface ICharacterSlice {
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
  }[];
  info: {
    count: number;
    next: string;
    pages: number;
    prev: object | null;
  } | null;
  isLoading: boolean;
}

const initialState: ICharacterSlice = {
  characters: [],
  info: null,
  isLoading: false,
};

export const characterSlice = createSlice({
  name: "characterSlice",
  initialState,
  reducers: {
    updateStatus(state) {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters = [...state.characters, ...action.payload.results];
      state.info = [...state.characters, action.payload.info];
      state.isLoading = false;
    });
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export default characterSlice.reducer;
