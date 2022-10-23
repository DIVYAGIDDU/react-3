import React,{useState} from "react";
let Counter=()=>{
    let[Counter,setCounter]=useState(0);
return(
    <>
    <h4>Counter Value:{Counter}</h4>
    <button onClick={()=> {setCounter(Counter+1); }}>INCR</button>
    <button onClick={()=> {setCounter(Counter-1); }}>DECR</button>
    </>
);
};
export default Counter;