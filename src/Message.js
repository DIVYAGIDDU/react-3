import React, {useState} from "react";
let Message =()=>{
let [Message,setMessage]=useState("hlo......");
return(
    <div>
    <h1>Message:{Message}</h1>
    <button onClick={()=>{setMessage("gm");}}>GM</button>
    <button onClick={()=>{setMessage("gn");}}>GN</button>
    </div>
);
};
export default Message;