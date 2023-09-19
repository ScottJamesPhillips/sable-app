import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BondDisplayState = {
  value: boolean;
};

const initialState = {
  value: false,
} as BondDisplayState;

export const displayBond = createSlice({
  name: "displayBond",
  initialState,
  reducers: {
    showBond: (_, action: PayloadAction<boolean>) => {
      return { value: action.payload };
    },
  },
});

export const { showBond } = displayBond.actions;
export default displayBond.reducer;
