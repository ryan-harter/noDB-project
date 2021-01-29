import React from 'react'
import './userRequests.css'

export default class UserRequests extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      
    }
  }

  handleSelect(e){
    this.props.handleToggleEdit(e)
    
  }


  
  render(){
    
    const {user} = this.props

    return (
      <div className='pup'>
        <section onClick={() => this.handleSelect(user)} className='pup_request'>         
          <h5>Request Id: {user.requestId} </h5>         
          <p><strong>Name:</strong> {user.name} </p>
          <p><strong>Company Name:</strong> {user.companyName} </p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Shipping Address:</strong> {user.shipTo}</p>
          <p><strong>Request Status:</strong> {user.requestApproved ? 'Approved' : 'Pending'}</p>
          <p><strong>PUP Code:</strong> {user.pupCode}</p>
        </section>
      </div>
    )
  }

  
}

