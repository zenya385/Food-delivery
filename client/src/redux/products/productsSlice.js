import { createSlice } from "@reduxjs/toolkit";

import { getProductsOperations} from "../products/productsOperations";

const productsSlice = createSlice({
  name: "products",
  initialState: {
 product:[],
//  {

//     id:"",
//     name:"",
//     image:"",
//     description:"",
//     info:"",
//     price:null,
//     store:""
//  },
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

    [getProductsOperations.pending](state) {
        state.isLoading = true;
      },
      [getProductsOperations.fulfilled](state, { payload }) {
        state.isLoading = false;
        state.error = null;
        state.product = payload;
      },
      [getProductsOperations.rejected](state, { payload }) {
        state.isLoading = false;
        state.error = payload;
        state.product = null;
      },
    },
  });
  
//   export const { getUserAnswer, testingType, setQuestionsForUser } =
//   productsSlice.actions;
  export default productsSlice.reducer;
  