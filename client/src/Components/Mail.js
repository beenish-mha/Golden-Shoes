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
    }

    return(
        
        <div className="col-sm-6"> 
            <form onSubmit={handleSubmit}>
                <div class="input-group mb-3">
                    <input type="text" name = "name" value={name} onChange={e => setName(e.target.value)} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                    <input type="email" name = "email" value={email}  onChange={e => setEmail(e.target.value)} class="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group" name = "message"  value = {message} onChange={e => setMessage(e.target.value)}>
                    <span class="input-group-text">Enter your Message</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <button type="submit" value = "submit">Submit Your Message</button>
            </form>

            {sendMessage ? <p>Thank u</p>: <></>}
        </div>
  )
    
}

export default Mail;