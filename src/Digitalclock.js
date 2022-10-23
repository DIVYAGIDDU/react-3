import React from "react";
export class Digitalclock extends React.Component{
    constructor(props){
        super(props);
        this.state={ct:new Date().toLocaleTimeString()};
        this.componentDidMount=()=>{
            console.log("After Render");
            setInterval(()=>{
                this.setState({ct:new Date().toLocaleTimeString()});
            },1000);
        };
        this.componentWillUnmount=()=>{
            console.log("Final");
        };
        render(){
            return()
        }
        }
    }
    export default Digitalclock
