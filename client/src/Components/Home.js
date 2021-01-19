import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import Product from "./Product";
import NotFound from "./NotFound";
import LoadingBox from "./LoadingBox";

const Home = ()=>{

const [shoes, setShoes] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

useEffect(() =>{

    const fetchData = async() =>{
        try {
            setLoading(true);
            const {data} = await axios.get("/shoes");
            setLoading(false);
            setShoes(data);
        }catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }
    
    fetchData();
        }, []);

    const showProducts = () =>(
        <div className="row">
            {shoes.map(shoe => (
                <Product key = {shoe._id} shoe = {shoe}/>

            ))}
            
        </div>
   );

    return (
        <div>  

            {loading?(<LoadingBox></LoadingBox>)
            :
            error?(<NotFound>{error}</NotFound>)
            : <><h3 className = "home-heading">
            <span >
                <i className="shoe-icon fas fa-shoe-prints"></i>
            </span>
            Good shoes take you good places!
            <span >
                <i className=" shoe-icon fas fa-shoe-prints"></i>
            </span>
        </h3>
        <div>{showProducts()}</div>
        </>           
            }
             
            
        </div>
    )
};

export default Home;