import React from 'react'
import axios from 'axios'
import './userRequests.css'

export default class UserRequests extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      
    }
  }

  handleSelect(e){
    this.props.handleToggleEdit(e)
    console.log(e)
    
  }


  
  render(){
    
    const {user} = this.props

    return (
      <div>

        
        <section onClick={() => this.handleSelect(user)} className='pup_request'>
          
          <h5>Request Id: {user.requestId} </h5>
          
          <p>Name: {user.name} </p>
          <p>Company Name: {user.companyName} </p>
          <p>Phone: {user.phone}</p>
          <p>Email: {user.email}</p>
          <p>Shipping Address: {user.shipTo}</p>
          <p>Request Status: {user.requestApproved ? 'Approved' : 'Pending'}</p>
          <p>PUP Code: {user.pupCode}</p>
        </section>
        

      </div>
    )
  }

  
}

