import React from "react";
import Employee from "./Employee/Employee";
import SearchBar from "./Components/SearchBar";
const App = ()=>{
  return (<div>
  <Employee/>
  <SearchBar placeholder="Enter abook name..."/>
  </div>
  );
}
export default App