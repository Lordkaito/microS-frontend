import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, LikePayload } from "../../config/interfaces";

const postsSlice = createSlice({
  name: "posts",
  initialState: [] as Post[],
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
    removePost: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((post) => post.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    likePost: (state, action: PayloadAction<LikePayload>) => {
      const post = state.find((post) => post.id === action.payload.postId);
      if (post) {
        post.likes.push({
          userId: action.payload.userId,
          postId: action.payload.postId,
        });
      }
    },
  },
});

export const { removePost, likePost } = postsSlice.actions;

export default postsSlice.reducer;
