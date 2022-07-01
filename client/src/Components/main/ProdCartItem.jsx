import React from 'react';
import { useSelector } from "react-redux";
import { getProdForCart } from '../../redux/products/productsSelectors';
import s from './ProdCartItem.module.scss';


const ProdCartItem = (image, name, price) => {

  const product = useSelector(getProdForCart);
    return (
      product.map( el=>   <li className={s.list__item} >
        <div className={s.list__wrap}>
          <img className={s.list__img} src={el.image} alt={el.name} />
        </div>
        <div className={s.list__box}>
          <p className={s.list__text}>{el.price}грн</p>
        </div>
       <input className={s.list__input} type="number"  />
       {/* <button className={s.list__btn} onSubmit={null} type="submit" >Submit</button> */}
      </li>)
  
       );
      }

export default ProdCartItem;