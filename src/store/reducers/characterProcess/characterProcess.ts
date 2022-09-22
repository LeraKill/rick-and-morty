import { ICharactersProps } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  characterData: ICharactersProps | null;
}

const initialState: IInitialState = {
  characterData: null,
};

export const AppCharacterProcess = createSlice({
  name: "characterProcess",
  initialState,
  reducers: {
    changeCharacterDataStore(state, action: PayloadAction<ICharactersProps>) {
      state.characterData = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { changeCharacterDataStore } = AppCharacterProcess.actions;

export default AppCharacterProcess.reducer;
