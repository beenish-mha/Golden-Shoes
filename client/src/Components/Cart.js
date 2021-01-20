import React from "react";

const Cart = (props) => {
    const {cartItems} = props.location.cartItems;
    console.log (props.location.cartItems);
      return (
        <>
        {cartItems.length === 0 && <div>Cart is empty!</div>}
        </>
    )
}

export default Cart;