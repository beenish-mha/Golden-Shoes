import React, { useState } from "react";

const Mail = () => {

    const [name, setName]=useState();
    const [email, setEmail]= useState();
    const [Message, setMessage] = useState();

    const handleChange = (e)=>{
        console.log(e.target.value);
    }

    return(
        <div class="col-sm-6"> 
            <div class="input-group mb-3">
                <input type="text" name = "name" onChange={handleChange} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                <input type="email" name = "name"  onChange={handleChange} class="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
            <div class="input-group" name = "name" onChange={handleChange}>
                <span class="input-group-text">Enter your Message</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>
  )
    
}

export default Mail;