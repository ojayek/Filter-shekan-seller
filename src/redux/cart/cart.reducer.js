// import CardActionTypes from './cart.types';
import {addItemToCart,removeItemFromCheckout} from './cart.utiles';

const INITIAL_STATE = {
  hidden : true,
  cartItem:[]
};

export const CartActionTypes = {
  Toggle_Cart_Hidden:'Toggle_Cart_Hidden',
  ADD_ITEM: 'ADD_ITEM',
  Remove_Item:'Remove_Item',
  SUB_ITEM:'SUB_ITEM'
};

const cartReducer = (state=INITIAL_STATE,action) =>{
 switch (action.type){
  case CartActionTypes.Toggle_Cart_Hidden:
    return{
      ...state,
      hidden : !state.hidden
    };
  case CartActionTypes.ADD_ITEM:
    return{
      ...state,
      cartItem:addItemToCart(state.cartItem, action.payload)
    };
  case CartActionTypes.Remove_Item:
    return{
      ...state,
      cartItem:state.cartItem.filter(
        cart => cart.id !==action.payload.id
      )
    };
  case CartActionTypes.SUB_ITEM:
    return{
      ...state,
      cartItem:removeItemFromCheckout(state.cartItem,action.payload)
    };
    default :
    return state
 }
}
export default cartReducer;

export const togglecartHidden = () =>({
  type:CartActionTypes.Toggle_Cart_Hidden
  });

export const addItem = item =>({
  type:CartActionTypes.ADD_ITEM,
  payload:item
});

export const REMOVEITEM = item =>({
  type:CartActionTypes.Remove_Item,
  payload:item
});

export const subItem = item =>({
  type:CartActionTypes.SUB_ITEM,
  payload:item
});