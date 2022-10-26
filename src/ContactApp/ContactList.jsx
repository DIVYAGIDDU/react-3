import React from 'react';
class ContactList extends React.Component{
    userSelected_Contact=(Contact)=>{
        this.props.two(Contact)
        console.log(contact.name.first);
    }
    render(){
        return(
            <div>
             <h1>ContactList</h1>
             <pre>{JSON.stringify(this.props)}</pre>
             <table className='table table-hover'>
             <thead className='bg-dark text-white'>
             <tr>
                  <th>SL NO</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
             </tr>
             </thead>
               
             <tbody>
                  {
                    this.props.Contacts.mpa((Contact,index)=>{
                      return<tr key={index} onMouseOver={this.userSelected_Contact.bind(this,Contact)}>
                      <td>{index+1}</td>
                      <td>{Contact.login.uuid.slice(-4)}</td>
                      <td>{Contact.name.first.toUppercase()}</td>
                      <td>{Contact.email}</td>
                      <td>{Contact.gender.slice(0,1).toUppercase()}</td>
                      </tr>

                    })
                  }
             
             </tbody>
             </table>
            </div>
        )
    }
}
export default ContactList