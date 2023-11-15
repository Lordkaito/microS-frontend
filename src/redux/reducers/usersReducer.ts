import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../config/interfaces";

const userSlice = createSlice({
  name: "user",
  initialState: {} as User,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },

    removeUser: (state) => {
      state = {} as User;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
