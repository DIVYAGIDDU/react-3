import React from "react";
class Products extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Products:{
                id:1,
                name: "PP INFINITY BMW ",
                imgage :'https://rukminim1.flixcart.com/image/312/312/l4n2oi80/mobile/r/6/t/-original-imagfhu6dcpdnqkh.jpeg?q=70' ,
                price:250000 ,
                qty:1
            }
        }
    }
    incrHandler=()=>{
        console.log("Test Case123");
this.state({Products:{...this.state.Products.qty +1}})
    }
    decrHandler=()=>{
        this.state({Products:{...this.state.Products.qty -1}})
    }
    render(){

        return  <div className="container">
        <h1>Product component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="row">
        <div className="col-md-8">
        <table className="table">
        <thead className="bg-primary text=white">
         <tr>
           <th>id</th>
           <th>name</th>
           <th>image</th>
           <th>price</th>
           <th>qty</th>
           <th>Total</th>
       </tr>
       </thead>
      <tbody>
         <tr>
         <td>{this.state.Products.id}</td>
         <td>{this.state.Products.name}</td>
         <td><img src={this.state.Products.imgage}></img></td>
         <td>{this.state.Products.qty * this.state.Products.price}</td>
         <td><button className="fa fa-minus-circle">DECR</button>0<button onClick={this.incrHandler} className="fa fa-minus-circle">INCR</button> </td>
        
         </tr>
      </tbody>
        </table>
        </div>
        </div>
        </div>
    }
}
export default Products

