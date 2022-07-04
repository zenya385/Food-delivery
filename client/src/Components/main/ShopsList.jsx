import React from "react";
import s from "./ShopsList.module.scss";
// import data from '../../data/shops.json';

const ShopsList = ({ data, handleShopValue, activeShop  }) => {



  return (
    <>
      <ul className={s.shop}>
        <li className={s.shop__title}
        >Shops:</li>
        {data.map((el) => (
          <li key={el._id}>
            <button 
          
          value={el.name}
          className={(activeShop===el.name? s.shop__activeStyle :s.shop__item)}
        // className={ ({ activeShop }) => (activeShop ? s.shop__activeStyle : s.shop__item)}
          onClick={(e)=>handleShopValue(e)}>
            {el.name}
          </button></li>
        
        ))}
      </ul>
    </>
  );
};

export default ShopsList;
