import React, { Component } from 'react'

export default class UserRequestForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      pupCode: 0
    }
  }
  
  handleCode = (e) =>{
    this.setState({
      pupCode: e.target.value
    })
  }


  handleBack = () => {
    this.props.back()
  }

  handleEdit = () => {
    if(this.state.isEditing){
      this.setState({
        isEditing: false
      })
    }else {
      this.setState({
        isEditing: true
      })
    }
    
  }


  handleDelete = (id) => {
    this.props.deleteRequest(id)
    this.handleBack()
  }

  handleStatus = (id, bool, code) =>{
    this.props.updatePUPStatus(id, bool, code)
  }

  render() {
    const {element = {}} = this.props
    
  
    return (
      <div>
        <h1>User Request Form</h1>
        <button onClick={this.handleBack}>Back</button>
        <main>
          <p>Request ID: {element.requestId}</p>
          <p>Name: {element.name}  </p>
          <p>Company Name: {element.companyName} </p>
          <p>Phone: {element.phone} </p>
          <p>Email: {element.email} </p>
          <p>Shipping Address: {element.shipTo} </p>
          <p>Request Status: {element.requestApproved ? 'Approved' : 'Pending'} </p>
          {!this.state.isEditing ? (<p>PUP Code: {element.pupCode || this.state.pupCode} </p>): (<input defaultValue={element.pupCode || this.state.pupCode} onChange={(e) => this.handleCode(e)} />)}
        </main>
        <button onClick={() => {this.handleStatus(element.requestId, !element.requestApproved, this.state.pupCode)}}>{element.requestApproved ? 'Disapprove' : 'Approve'}</button>
        <button onClick={this.handleEdit}>Add/Edit PUP Code</button>
        <button onClick={() => this.handleDelete(element.requestId)}>Delete</button>
        
      </div>
    )
  }
}
