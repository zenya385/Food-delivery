import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProdList from "../Components/main/ProdList";
import ShopsList from "../Components/main/ShopsList";
import { getProductsOperations } from "../redux/products/productsOperations";
import { getProducts } from "../redux/products/productsSelectors";
import { getShopsOperations } from "../redux/shops/shopsOperations";
import { getShops } from "../redux/shops/shopsSelectors";
import s from "./ShopsPage.module.scss";

const ShopsPage = () => {
  const [activeShop, setActiveShop] = useState("All");
  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const shops = useSelector(getShops);

    useEffect(() => {
      dispatch(getProductsOperations());
      dispatch(getShopsOperations());
    }, []);

    const handleShopValue = (e) => {
      console.log('e.target :>> ', e.target);
      setActiveShop(e.target.value)
      }
      console.log('activeShop :>> ', activeShop);

  return (
    <div className={s.shop}>
      { Boolean(shops) &&<ShopsList 
      data={shops} 
      activeShop={activeShop}
      handleShopValue={handleShopValue}/>}
      <div className={s.shop__prod}>
     { Boolean(products) && <ProdList

          data={products}
          activeShop={activeShop}
          setActiveShop={setActiveShop}
        />}
      </div>
    </div>
  );
};

export default ShopsPage;
