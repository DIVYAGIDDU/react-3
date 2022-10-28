import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
class App extends React.Component{
  render(){
    return( <div>
    
    <Navbar/>
    <Home/>
    <About/>
    <Contact/>
      </div>

    )
  }
}
export default App