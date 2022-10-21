import React from "react";
import Employees from "./data";
class Employee extends React.Component{
    render(){
        
        return<div className="container md-5">
            <pre>{JSON.stringify(Employee)}</pre>
            <input>Search here</input>
            <div className="row">
            <div className="col-md-6">
            <div className="table table-hover">
            <thead className="bg-dark text-white">
             <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Email</th>
               <th>Gender</th>
             </tr>
            </thead>

            <tbody>{
                Employees.map((Employees)=>{
                return <tr key="Employees.id">
                   <td>{Employees.Id}</td>
                   <td>{Employees.Name}</td>
                   <td>{Employees.Email}</td>
                   <td>{Employees.gender}</td>
               </tr>
                })
            }
            </tbody>
            </div>
            </div>
            </div>
            
            </div>
        
    }
}
export default Employee
