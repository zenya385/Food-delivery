import { createAsyncThunk } from "@reduxjs/toolkit";
import { getShopsInfoApi } from "../../utils/fetchApi";

export const getShopsOperations = createAsyncThunk(
  "shops",
  async (_, thunkApi) => {
    try {
      const getShopInfo = await getShopsInfoApi();
      return getShopInfo;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
