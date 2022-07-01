import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import s from './NavBar.module.scss';


const NavBar = () => {
    return (
            <>
        <div className={s.nav}>
           
        <NavLink className={s.nav__shop} to="/">ShopsPage</NavLink>
        <NavLink className={s.nav__cart} to="/cart">Cart</NavLink>
        </div>
        <Outlet/>
        </>
    );
}

export default NavBar;