import React from 'react';
import s from './Auth.module.scss';


const Auth = () => {
    return (
        <div className={s.form}>
            <label>Name</label><br></br>
            <input className={s.form__input} type="text" placeholder='Your name'/><br></br>
            <label>Email</label><br></br>
            <input className={s.form__input} type="email" placeholder='name@example.com'/><br></br>
            <label>Phone</label><br></br>
            <input className={s.form__input} type="tel" placeholder='38 000 000 00 00'/><br></br>
            <label>Address</label><br></br>
            <input className={s.form__input} type="address" placeholder='Your address'/><br></br>
            </div>

        
    );
}

export default Auth;