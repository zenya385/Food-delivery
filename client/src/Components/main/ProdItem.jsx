import React from "react";

import s from "./ProdItem.module.scss";

const ProdItem = ({ image, name, description, price, info }) => {
 
  return (
    <li className={s.list__item} >
      <div className={s.list__wrap}>
        <img className={s.list__img} src={image} alt={name} />

        <p className={s.list__description}>{info}</p>
      </div>
      <div className={s.list__box}>
        <h2 className={s.list__title}>
          {name}, {description}
        </h2>
        <p className={s.list__text}>{price}грн</p>
      </div>
      <div className={s.list__btnW}>
        <button className={s.list__btn}>Add to card</button>
      </div>
    </li>
  );
};

export default ProdItem;
