import React from "react";
import s from "./ShopsList.module.scss";
// import data from '../../data/shops.json';

const ShopsList = ({ data }) => {
  // console.log('data', data)
  return (
    <>
      <ul className={s.shop}>
        <li className={s.shop__title}>Shops:</li>
        {data.map((el) => (
          <button key={el.name} className={s.shop__item}>
            {el.name}
          </button>
        ))}
      </ul>
    </>
  );
};

export default ShopsList;
