import React from "react";
export class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
            <a href="/" className="navbar-brand"><h1>MakeMyTrip</h1></a>
            <a href="/" className="navbar-brand">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</a>
            <a href="/" className="navbar-brand">Destination</a>
            <a href="/" className="navbar-brand">Contact us</a>
            <a href="/" className="navbar-brand"></a>
            </nav>
            
        )
    }

}
export default Navbar