import React, {Component} from 'react'
import axios from 'axios'
import DisplayArea from './Components/DisplayArea'
import Header from './Components/Header'
import Footer from './Components/Footer'


import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userData: [],
      }
      
      this.deleteRequest = this.deleteRequest.bind(this)
      this.getRequestList = this.getRequestList.bind(this)
  }

  componentDidMount(){
    this.getRequestList()
  }

  getRequestList = (query) =>{
    axios.get(`/api/requests?${query}`).then( res => {
      this.setState({
        userData: res.data
      })
    }).catch(err =>{
      alert('something went wrong')
    })
  }


  updatePUPStatus = (id, bool, code) => {
    const body = {
      requestApproved: bool,
      pupCode: code
    }
    axios.put(`/api/requests/${id}`, body).then( response =>{
      this.setState({
        userData: response.data
      })
    }).catch(err =>{
      alert('something went wrong')
    })
  }

  deleteRequest(id){
    
    axios.delete(`/api/requests/${id}`).then(response =>{
      this.setState({
        userData: response.data
      })
    }).catch(err =>{
      alert('something went wrong')
    })
  }
  

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addRequest(){
    const {name, companyName, phone, email, shipTo, requestApproved, pupCode} = this.state

    const body = {
        
        name,
        companyName,
        phone,
        email,
        shipTo,
        requestApproved,
        pupCode 
    }
    console.log(body, this.state)

    axios.post(`/api/requests/`, body).then( response => {
      this.setState({
        userData: response.data
      })
    }).catch(err =>{
      alert('something went wrong')
    })
  }

  
  
  
  render(){
    let {userData} = this.state
    

    return (
      <div className="App">
        <Header userData={userData} getRequestList={this.getRequestList}/>
        
        <h2>New Request</h2>
        <input placeholder="Name" name="name" onChange={(e) => this.handleChange(e)}/>
        <input placeholder="Company Name" name="companyName" onChange={e =>this.handleChange(e)}/>
        <input placeholder="Phone" name="phone" onChange={e =>this.handleChange(e)}/>
        <input placeholder="Email" name="email" onChange={e =>this.handleChange(e)}/>
        <input placeholder="Shipping Address" name="shipTo" onChange={e => this.handleChange(e)}/>
        <button onClick={(e) => this.addRequest(e)}>Add Request</button>


        <DisplayArea userData={userData} 
        getRequestList={this.getRequestList} 
        deleteRequest={this.deleteRequest}
        updatePUPStatus={this.updatePUPStatus}
        />
        <Footer/>
      </div>
    );
  }
  
}

export default App;
