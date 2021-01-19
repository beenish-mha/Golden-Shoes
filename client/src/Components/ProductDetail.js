import React, { useEffect, useState } from "react";
import axios from "axios";
import NotFound from "./NotFound";
import Ratings from "./Ratings";

    const ProductDetail = (props)=>{
    const [shoes, setShoes] = useState([]);
    const shoe_id = props.match.params.id;
    
    useEffect(() =>{
        const fetchData = async() =>{
            const {data} = await axios.get("/shoes");
            setShoes(data)      
        }
        fetchData();
    }, []);

    const product = shoes.find((shoe) =>(shoe._id) === shoe_id)
    
            if (!product){
                return (<NotFound/>);
            }
    return (
       
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <img src={product.Image} className="img-fluid" alt={product.Style}/>
            </div>
            <div className="col-md-4">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h3 >{product.Color} {product.Style}</h3>
                        <Ratings Ratings= {product.Ratings} Reviews = {product.Reviews}/>
                    </li>
                    <li className="list-group-item"><h3>£{product.Price}</h3></li>
                    <li className="list-group-item">
                        <h4>Description:</h4>
                        {product.Description}
                    </li>
                </ul>
                <div className="card bg-light mb-3" >
                    <div className="card-body cart-card">
                        <h5 className="card-title stock-check">
                            {product.Stock<1?(
                            <span>Out of Stock</span>): 
                            <span>In Stock</span>}
                        </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className=" add-to-cart btn btn-primary btn-lg btn-block">Add to shopping Bag</button>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>

       
)
}

export default ProductDetail;