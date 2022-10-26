import React from "react";
class ContactDetails extends React.Component{
    render(){
        let {Contact}=this.props
        return(
            <div>
            <pre>{JSON.stringify(this.props)}</pre>
            <h1>Contact Details</h1>
            <div className="card">
            <div className="card-header">
             <img src={Contact.picture.large} alt=""/>
            </div>
            <div className="card-body">
            <ul className="list-group">
               <li className="list-group-item">{Contact.gender}</li>
               <li className="list-group-item">{Contact.email}</li>
               <li className="list-group-item">{Contact.dob.age}</li>
               <li className="list-group-item">{Contact.age.username}</li>
               <li className="list-group-item">{Contact.location.country}</li>



            </ul>
            </div>
            </div>
            
            </div>
        )
    }
}
export default ContactDetails