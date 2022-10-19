import React, { Component } from "react";
export class Message1 extends  React.Component{

    state={
        Message:"hlo"
    }
    gmhandler=()=>{
    this.setState({Message:"good morning"})
    }
    gnhandler=()=>{
   this.setState({Message:"good night"})
    }
 render(){
    return<div>
        <h1>Message component:{this.state.Message}</h1>
        <button onClick={this.gmhandler}>Gm</button> &nbsp;&nbsp;
        <button onClick={this.gnhandler}>Gn</button>
    </div>
 }
}
export default Message1