import {createSelector} from  'reselect';

const selectCart = state =>state.cart;

 export const SelectCartItems = createSelector(
     [selectCart],
     cart => cart.cartItem
 );

 export const SelectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

 export const selectCartItemCount = createSelector(
    [SelectCartItems],
    cartItem => cartItem.reduce((prevVal,current) => prevVal + current.quantity,0)
 );

 export const CartAmountTotal = createSelector(
    [SelectCartItems],
    cartItem => cartItem.reduce((prevVal,current) => prevVal + current.quantity*current.price,0)
 );