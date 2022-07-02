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
        {product.length && (<ProdCartItem/>)}
        {!product.length && <p className=''>add products!</p>}
        </div>
        <div>
        <h3>Total price:</h3>
        <button className={s.list__btn} onSubmit={null} type="submit">submit</button>
        </div>
        </>
    );
}

export default ShoppingCartPage;