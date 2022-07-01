import React from "react";
import { useDispatch } from "react-redux";
import {getCard} from '../../redux/products/productsSlice';


import s from "./ProdItem.module.scss";

const ProdItem = ({ image, name, description, price, info }) => {
  const dispatch = useDispatch();

const addCard =(obj)=>{
  console.log('obj :>> ', obj);
  dispatch(getCard(obj))
  
}

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
        <button className={s.list__btn} onClick={()=>{addCard({image, name, price, info})}}>Add to card</button>
      </div>
    </li>
  );
};

export default ProdItem;
