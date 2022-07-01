import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductInfoApi } from "../../utils/fetchApi";

export const getProductsOperations = createAsyncThunk(
  "products",
  async (_, thunkApi) => {
    try {
      const getProductInfo = await getProductInfoApi();
      return getProductInfo;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
