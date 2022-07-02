import React, { useRef, useState } from 'react';
import s from './UserInfoForm.module.scss';


const UserInfoForm = () => {
    // // const [name, setName] = useState('');
    // // const [email, setEmail] = useState('');
    // // const [phone, setPhone] = useState('');
    // // const [address, setAddress] = useState('');
    // // const [loading, setLoading] = useState(false);
    // const [total, setTotal] = useState(0);
    // const cartRef = useRef();

    // const handleChange = event => {
    //     const { name, value } = event.currentTarget;
    //     switch (name) {
    //       case 'name':
    //         setName(value);
    //         break;
    //       case 'email':
    //         setEmail(value);
    //         break;
    //         case 'phone':
    //             setPhone(value);
    //             break;
    //       case 'address':
    //         setAddress(value);
    //         break;
    
    //       default:
    //         break;
    //     }
    //   };

    //   const totalPrice = array => {
    //     return array.reduce(
    //       (previousValue, currentValue) =>
    //         previousValue + currentValue.price * currentValue.amount,
    //       0,
    //     );
    //   };

    //   const handleSubmit = async event => {
    //     event.preventDefault();
    //     setLoading(false);
    //     try {
    //       setLoading(true);
    //       const totalSumOfOrder = totalPrice(carts);
    //       setTotal(totalSumOfOrder);
    //       const fields = {
    //         name,
    //         email,
    //         phone,
    //         address,
    //         totalSumOfOrder,
    //       };
          
    //      const { data } = await axios.post(`${BASE_URL}/api/contacts`, fields);
    //      onSubmit({ data });
    //     }
    // }
    


    return (
        <div className={s.form} >
            <label>Name</label><br></br>
            <input className={s.form__input}
            type="text" 
            placeholder='Your name'
            name="name"
            // value={name}
            // onChange={handleChange}
             />
            <br></br>
            <label>Email</label><br></br>
            <input className={s.form__input} 
            type="email" 
            placeholder='name@example.com'
            name="email"
            // value={email}
            // onChange={handleChange}
            />
            <br></br>
            <label>Phone</label><br></br>
            <input className={s.form__input} 
            type="tel" 
            placeholder='38 000 000 00 00'
            name="phone"
            // value={phone}
            // onChange={handleChange}
            />
            <br></br>

            <label>Address</label><br></br>
            <input className={s.form__input} 
            type="address" 
            placeholder='Your address'
            name="address"
            // value={address}
            // onChange={handleChange}
            />
            <br></br>
            </div>

        
    );
}

export default UserInfoForm;