import { createSlice } from "@reduxjs/toolkit";
import { getUserOperations } from "../shops/shopsOperations";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    phone:"",
    address:"",
    error: null,
    isLoading: false
  },
  reducers: {
    // testingType(state, { payload }) {
    //   state.typeOfTesting = payload;
    // },
    // UserAnswer(state, { payload }) {
    //   state.userAnswer = [...payload];
    // },
    // setQuestionsForUser(state) {
    //   state.questionsForUser = [];
    //   state.isLoading = false;
    //   state.error = null;
    // },
  },
  extraReducers: {
    [getUserOperations.pending](state) {
      state.isLoading = true;
    },
    [getUserOperations.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.shops = payload;
    },
    [getUserOperations.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      state.shops = null;
    },
  },
});

//   export const { getUserAnswer, testingType, setQuestionsForUser } =
//   productsSlice.actions;
export default userSlice.reducer;
