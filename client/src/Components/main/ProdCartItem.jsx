import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { getProdForCart } from '../../redux/products/productsSelectors';
import s from './ProdCartItem.module.scss';


const ProdCartItem = (image, name, price) => {

  const [carts, setCarts] = useState([]);

  const product = useSelector(getProdForCart);

  
    return (
      <ul className={s.list}>
     { product.map( el=>   
      <li className={s.list__item} >
        <div className={s.list__wrap}>
          <img className={s.list__img} src={el.image} alt={el.name} />
        </div>
        <div className={s.list__box}>
        <h2 className={s.list__title}>
          {el.name}
        </h2>
          <p className={s.list__text}>${el.price}</p>
       <input className={s.list__input} type="number"  />
        </div>
       <button className={s.list__btn} onSubmit={null} type="submit">delete</button>
      </li>)}
      </ul>
       );
      }

export default ProdCartItem;