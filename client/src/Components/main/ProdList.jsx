import React from "react";
// import data from "../../data/products.json";
import ProdItem from "./ProdItem";
import s from "./ProdItem.module.scss";

const ProdList = ({ data, activeShop }) => {
  let shops = [];
  activeShop === "All"
    ? (shops = data)
    : (shops = data.filter((el) => el.shop === activeShop));

  return (
    <>
      <ul className={s.list}>
        {shops.map((el) => (
          <ProdItem
            image={el.image}
            name={el.name}
            key={el._id}
            description={el.description}
            price={el.price}
            info={el.info}
          />
        ))}
      </ul>
    </>
  );
};

export default ProdList;
