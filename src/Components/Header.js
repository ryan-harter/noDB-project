import React, { Component } from 'react'
import './header.css'
import logo from '../images/Luxul_Logo.png'


export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      searchInput: '',
    }
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }//dynamic change. input has "name" attribute

  submitQuery(){
    let queryString= ''
    for(let key in this.state){
      queryString += '&' + key + '=' + this.state[key]
    }

    if (queryString)

    this.props.getRequestList(queryString)
    //'&searchInput=test' goal is for this to loop over every single state key and eventually invoke my get request
  }


  render(){


    return (
      <header>
        <img alt='luxul_logo.png' src={logo}/>
        <h1>PUP Code Tracker</h1>
        <div>
          <input name='email' placeholder='Email Search' onChange={e => this.handleChange(e)}/>
          <button onClick={() => {this.submitQuery()}}>Search</button>
        </div>
        
      </header>
    )
  }
}
