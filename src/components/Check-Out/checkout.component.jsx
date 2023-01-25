import React from 'react';
import './checkout.styles.css';
import {connect} from 'react-redux';
import {REMOVEITEM,addItem,subItem} from '../../redux/cart/cart.reducer';

const CheckOutComponent = ({ cart,ClearItem ,addItems,subItems}) => {
const { name, imageUrl, price, quantity } =cart;
  return(
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={()=>subItems(cart)}>&#10094; </div>
        <span className='value'>
          {quantity}
        </span>
        <div className='arrow' onClick={()=>addItems(cart)}>&#10095; </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() =>ClearItem(cart)}>&#10005;</div>
    </div>
  )};

  const mapDispatchTOProps=dispatch =>({
    ClearItem : item =>dispatch(REMOVEITEM(item)),
    addItems:item =>dispatch(addItem(item)),
    subItems:item =>dispatch(subItem(item))
  });
 export default connect(null,mapDispatchTOProps)(CheckOutComponent);