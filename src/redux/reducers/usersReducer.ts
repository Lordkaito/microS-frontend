import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../config/interfaces";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    id: 0,
    name: "",
    posts: [],
  } as User,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.posts = action.payload.posts;
    },

    removeUser: (state) => {
      state.email = "";
      state.id = 0;
      state.name = "";
      state.posts = [];
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
