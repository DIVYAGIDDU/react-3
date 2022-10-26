import React from 'react';
import ContactList from './ContactList';
import ContactDetails from "./ContactDetails";
import Axios from 'axios'
class ContactApp extends React.Component{
    constructor(props){
        super(props);
        this.state={Contact:[],sel_Contact:{}}
    }
    userSelected_Contact_Method=(Contact)=>{
      this.setState({sel_Contact:Contact})
      console.log(Contact.name.first,"line 12")
    }
    componentDidMount(){
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
             .then((responce)=>{
                this.setState({Contact:responce.data})
             })
             .catch()
    }
    render(){
        return( 
            <div className='continer '>
            <h1>Contact App</h1>
            <div className='row'>
            <span></span>
            <pre>{JSON.stringify(this.state.sel_Contact)}</pre>
            <div className='col-md-8'>
            {
                this.state.Contact.length > 0 ? <> <ContactList one={"GM"} two={"this.userSelected_Contct_Method"} Contact={this.state.Contact} /> </> : null
          }
            <div className='col-md-4'>
            {
               Object.keys(this.state.sel_Contact).length > 0 ? <> <ContactDetails Contact={this.state.sel_Contact}/> </> :null
            }
            </div>
            </div>
            </div>
            </div>

        )
    }
}
export default ContactApp