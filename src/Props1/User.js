import React from 'react';
import Employee from './Employee';
class User extends React.Component{
    uid='10';
    uname="divya"

    render(){
        return <div>
            <h1>User component</h1>
            <Employee id={this.uid} name={this.uname} details={this.udetails}/>
        </div>
    }
}
export default User