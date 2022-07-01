import React from 'react';
import Auth from '../Components/auth/Auth';
import ProdCartItem from '../Components//main/ProdCartItem';

import s from './ShoppingCartPage.module.scss';

const ShoppingCartPage = () => {
    return (
      <div className={s.cart}>
        <Auth/>
        <ProdCartItem/>
        </div>
    );
}

export default ShoppingCartPage;