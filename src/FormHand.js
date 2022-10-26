import React from "react";
class FormHand extends React.Component{
    state={
        email:'' ,
        password:''
    }
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler=(event)=>{
     event.preventDefault();
     console.log(this.state)
    }
 render(){
    return  <>
    <h1>Form Handling</h1>
    <pre>{JSON.stringify(this.state)}</pre>
         <form onSubmit={this.submitHandler}>
         <label>Email</label>
         <input type='test' onChange={this.emailHandler}/> <br></br><br></br>
         <label>Password</label>
         <input type='test' onChange={this.passwordHandler}/><br></br><br></br>
         <input type='Submit' valur='Login'/>
         </form>
     </>
 }
}
export default FormHand