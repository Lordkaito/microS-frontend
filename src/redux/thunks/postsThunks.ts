import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../../config/interfaces";

const savePostToDB = createAsyncThunk(
  "posts/savePost",
  async (post: Post, thunkAPI) => {
    try {
      const response = await axios.post("myurl", post);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const removePostFromDB = createAsyncThunk(
  "posts/removePost",
  async (postId: number, thunkAPI) => {
    try {
      const response = await axios.delete(`myurl/${postId}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const addLikeToDB = createAsyncThunk(
  "posts/addLike",
  async (likePayload: { userId: number; postId: number }, thunkAPI) => {
    try {
      const response = await axios.post("myurl", likePayload);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export { savePostToDB, removePostFromDB, addLikeToDB};
