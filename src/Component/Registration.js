import React from "react";
class Registration extends React.Component{
    state={
        Name:"",
        Mobile:"",
        Email:"",
        Pass:""
    }
    UpdateHandler=(event)=>{
        this.setState({[event.target.id]: event.target.value})
    }
    submithandler=(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    render(){
        return <>
         <h1>Registration Component</h1>
        <pre>{JSON.stringify()}</pre>
        <form onSubmit={this.submithandler}>
        <label>Name</label>
        <input type='text' onChange={this.UpdateHandler} id="Name"/> <br/><br/>
        <label>Mobile</label>
        <input type='number' onChange={this.UpdateHandler} id="Mobile"/><br/><br/>
        <label>Email</label>
        <input type='email' onChange={this.UpdateHandler} id="Email"/><br/><br/>
        <label>Pass</label>
        <input type='text' onChange={this.UpdateHandler} id="Pass"/><br/><br/>
        <input type='submit'  value='Registration'/>
        </form>
        </>
    }
}
export default Registration