import React, { useState } from "react";


const Mail = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sendMessage, setSendMessage]= useState(false);

    const handleSubmit = (event)=>{
        event.preventDefault();
    console.log ("Thank you " + name + " for sending email someone will contact you soon")
    setSendMessage(true);
    event.value="";
    
    }
    console.log("this is "+sendMessage);

    return(

        <div class="d-flex justify-content-center">
        <div className="col-sm-6 email-container "> 
            <form onSubmit={handleSubmit}>
                <div class="input-group mb-3">
                    <input type="text" name = "name" value={name} onChange={e => setName(e.target.value)} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                    <input type="email" name = "email" value={email}  onChange={e => setEmail(e.target.value)} class="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group" name = "message"  value = {message} onChange={e => setMessage(e.target.value)}> 
            
                    <textarea class="form-control" rows="10" aria-label="With textarea" placeholder="Message here..."></textarea>
                </div>
                   
                    <button type="submit" value = "submit" class="btn btn-primary" >Submit Your Message</button>
                
            </form>
            {sendMessage ?  <div><h4>Thank you for your email some one will contact you soon</h4></div>:<></>}
            
        </div>
        </div>
  )
    
}

export default Mail;