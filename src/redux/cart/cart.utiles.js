export  const  addItemToCart = (cartItems,cartthatwillAdd) =>{
    const exists =cartItems.find(   
        cart=>cart.id===cartthatwillAdd.id);

    if(exists){
        return cartItems.map(
            cart => cart.id ===cartthatwillAdd.id 
            ? { ...cart,  quantity : cart.quantity + 1  }
            :cart
        );
    }
    return [...cartItems, {...cartthatwillAdd,quantity: 1}];
};

export const removeItemFromCheckout= (cartItems,cartthatwillSub) =>{
    const exists =cartItems.find(   
        cart=>cart.id===cartthatwillSub.id);

    if(exists.quantity===1){
        return cartItems.filter(cart => cart.id !== cartthatwillSub.id)
    }
    return cartItems.map(
        cart => cart.id ===cartthatwillSub.id 
            ? { ...cart,  quantity : cart.quantity - 1  }
            :cart
    );
};