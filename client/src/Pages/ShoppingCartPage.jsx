import React from 'react';
import { useSelector } from 'react-redux';
import ProdCartItem from '../Components//main/ProdCartItem';
import UserInfoForm from '../Components/main/UserInfoForm';
import { getProdForCart } from '../redux/products/productsSelectors';

import s from './ShoppingCartPage.module.scss';

const ShoppingCartPage = () => {
  const product = useSelector(getProdForCart);

    return (
        <>
      <div className={s.cart}>
        <UserInfoForm/>
        {!!product.length  && <ProdCartItem/>}
        {!product.length && <p className={s.cart__item}>Add products, please!</p>}
        </div>
        <div className={s.wrapper}>
        <h3>Total price:$$${null}</h3>
        <button className={s.wrapper__btn} onSubmit={null} type="submit">submit</button>
        </div>
        </>
    );
}

export default ShoppingCartPage;