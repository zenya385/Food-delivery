import { createSlice } from "@reduxjs/toolkit";
import { getShopsOperations} from "../shops/shopsOperations";

const shopsSlice = createSlice({
  name: "shops",
  initialState: {
 shops:[],

error:null,
isLoading:false
  },
  reducers: {
    // testingType(state, { payload }) {
    //   state.typeOfTesting = payload;
    // },
    // getUserAnswer(state, { payload }) {
    //   state.userAnswer = [...payload];
    // },
    // setQuestionsForUser(state) {
    //   state.questionsForUser = [];
    //   state.isLoading = false;
    //   state.error = null;
    // },
  },
  extraReducers: {

    [getShopsOperations.pending](state) {
        state.isLoading = true;
      },
      [getShopsOperations.fulfilled](state, { payload }) {
        state.isLoading = false;
        state.error = null;
        state.shops = payload;
      },
      [getShopsOperations.rejected](state, { payload }) {
        state.isLoading = false;
        state.error = payload;
        state.shops = null;
      },
    },
  });
  
//   export const { getUserAnswer, testingType, setQuestionsForUser } =
//   productsSlice.actions;
  export default shopsSlice.reducer;
  