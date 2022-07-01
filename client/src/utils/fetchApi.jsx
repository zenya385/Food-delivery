import axios from "axios";
// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = "http://localhost:3001/";
axios.defaults.baseURL = "http://localhost:3001/";

export async function getShopsInfoApi() {
   
    const shopsInfo = await axios.get("/shops");
    return shopsInfo.data;
  }
  
export async function getProductInfoApi() {
    const productsInfo = await axios.get("products");
    return productsInfo.data ;
  }
