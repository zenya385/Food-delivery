import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendUserInfoApi } from "../../utils/fetchApi";

export const sendUserOperations = createAsyncThunk(
  "user",
  async (data, thunkApi) => {
    try {
      const sendUseInfo = await sendUserInfoApi(data);
      return sendUseInfo;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);