import React from 'react';
import './cartitem.styles.css';

const CartInIcon = ({item:{name,imageUrl,price,quantity}}) =>(

<div className='cart-item'>
    <img src={imageUrl} alt='item'/>
    <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity}*{price}</span>
    </div>
</div>
);
export default CartInIcon;