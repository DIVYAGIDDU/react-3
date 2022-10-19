import React from "react";
class  Employee extends  React.Component{
render(){
    return <div>
        <h1>Employee component</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <h2>User id:{this.props.id}</h2>
        <h2>User name:{this.props.name}</h2>
    </div>
}
}
export default Employee