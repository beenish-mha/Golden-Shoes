import React, { useState } from "react";
import axios from "axios";

const Cart = (props) => {

    const {setItems} = props.location;
    //console.log(setItems.items);

    const [cartShoes, setCartShoes] = useState([]);
    setCartShoes(setItems);
    console.log (cartShoes);

    return (
        <>
        Allah jee plz help
        </>
    )

}

export default Cart;