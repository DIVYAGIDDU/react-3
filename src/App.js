import React from "react";
import Message from "./Message";
import Counter from "./Counter";
import Login from "./Login";
function App(){
  return(
    <div>
    <Message/>
    <hr/>
    <Counter/>
    <Login/>
    </div>
  );
}
export default App