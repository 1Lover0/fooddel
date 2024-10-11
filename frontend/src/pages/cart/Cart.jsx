import React, { useContext } from 'react';
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {

    const{cartItems, food_list, reremoveCart, } = useContext(StoreContext)

    return (
        <div className='cart'>
            
        </div>
    );
};

export default Cart;