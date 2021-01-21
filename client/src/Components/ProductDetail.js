import React, { useEffect, useState } from "react";

import axios from "axios";
import NotFound from "./NotFound";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

    const ProductDetail = (props)=>{
  
    const[product, setProduct]= useState([]);
    const [items, setItems] = useState([]);
    const shoe_id = props.match.params.id;
    
    useEffect(() =>{
        let unMounted = false;

        if (!unMounted){
            const fetchData = async() =>{

                const {data} = await axios.get(`/shoes/id/${shoe_id}`);
                setProduct(data); 
                setItems(data) ;
            }
            
            fetchData();
        }
  
        return () =>{
            unMounted = true;
        }
    },[items]);

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
                       
                        {product.Stock > 0 && <Link to={{pathname:'/cart', setItems:{items}}} className="btn btn-primary">Add to the basket</Link>}
                        
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>

       
)
}

export default ProductDetail;