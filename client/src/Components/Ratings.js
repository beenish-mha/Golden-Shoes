import React from "react";

const Ratings = (props) => {

   const {Reviews} = props;
   const {Ratings} = props;


    return (
        <div className = "ratings">
                                <span class = "starIcon">
                                    <i className={Ratings>=1?"fa fa-star": Ratings>=0.5?"fas fa-star-half-alt": "far fa-star"}/>
                                    <i className={Ratings>=2?"fa fa-star": Ratings>=1.5?"fas fa-star-half-alt": "far fa-star"}/>
                                    <i className={Ratings>=3?"fa fa-star": Ratings>=2.5?"fas fa-star-half-alt": "far fa-star"}/>
                                    <i className={Ratings>=4?"fa fa-star": Ratings>=3.5?"fas fa-star-half-alt": "far fa-star"}/>
                                    <i className={Ratings>=5?"fa fa-star": Ratings>=4.5?"fas fa-star-half-alt": "far fa-star"}/>
                                </span>
                                <span class = "reviews">
                                    {"(" + Reviews + ")"}
                                </span>
                             </div>
    )

}

export default Ratings;