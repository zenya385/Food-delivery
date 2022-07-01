import React from 'react';
import s from './ProdCartItem.module.scss';


const ProdCartItem = ({image, name, price}) => {
    return (
        <li className={s.list__item} >
        <div className={s.list__wrap}>
          <img className={s.list__img} src={image} alt={name} />
        </div>
        <div className={s.list__box}>
          <p className={s.list__text}>{price}грн</p>
        </div>
       <input className={s.list__input} type="number"  />
       <button className={s.list__btn} onSubmit={null} type="submit" >Submit</button>
      </li>
       );
      }

export default ProdCartItem;