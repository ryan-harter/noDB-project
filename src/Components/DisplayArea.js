import React from 'react'
import UserRequestForm from './UserRequestForm'
import UserRequests from './UserRequests'
import axios from 'axios'

export default class DisplayArea extends React.Component {
  constructor(props){
    super()
    this.state = {
      isEditing: false,
      requestToEdit: '',
      selected: -1,
      
    }
    this.handleToggleEdit = this.handleToggleEdit.bind(this)
    
    
  }

  handleToggleEdit(e){
    if(this.state.isEditing){
      this.setState({
        isEditing: false
      })
    }else{
      this.setState({
        isEditing: true,
        selected: e.requestId
      })
    }
  }
  
  render(){
    
    let {userData, addRequest, deleteRequest, getRequestList, updatePUPStatus} = this.props
    let {requestToEdit, isEditing, selected} = this.state


    let requestMapped = userData.map(userObj =>{
      return <UserRequests key={userObj.requestId}
      handleToggleEdit={this.handleToggleEdit}
      getRequestList = {getRequestList} 
      userData={userData}
      addRequest={addRequest}
      user={userObj}/>
      })

    return (
      <div>
        <h2>Active PUP Requests</h2>
      
        {isEditing === false ? (
        <>
        {requestMapped}
        </>
        )
        : 
        (<UserRequestForm 
        element={userData.find(e => e.requestId === selected)}  
        back={this.handleToggleEdit}
        deleteRequest={deleteRequest}
        updatePUPStatus={updatePUPStatus}/>)}
      </div>
    )
  }
  
}
