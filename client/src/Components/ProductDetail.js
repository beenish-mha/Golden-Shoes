import React from "react";
import data from "./data";

const ProductDetail = (props)=>{
    const shoe_id = parseInt(props.match.params.id);
    console.log (data.shoes)
    const product = data.shoes.find((shoe) =>(shoe._id) === shoe_id)
    console.log ("nothing here"+ shoe_id + product.price)
    return (
       
    <div className="container">
        <div className="row">
        <div className="col-sm-6">
        <img src={product.Image} className="img-fluid" alt={product.Style}/>
        </div>
        <div className="col-sm-3">Product Details</div>
        <div className="col-sm-3">Price card</div>
    </div>

        </div>
)
}

export default ProductDetail;