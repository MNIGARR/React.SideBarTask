import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div style={{color: "black"}} className='main'>
        <div style={{display: "flex", width: "50%", textAlign: "center"}} className='mainHeader'>
        <img style={{height: "300px", width: "300px", margin: "auto"}} alt= "react-logo" src = "https://szymonkrajewski.pl/my-start-with-react-and-its-rich-ecosystem/images/012_logo_reactstrap-1.png"></img>
        <h1 style={{margin: "auto", marginRight: "100px"}}>reactstrap</h1>
        
      </div>
      <div>
      <h1 style={{fontSize: 17, margin: "auto"}}>Responsive Sidebar Template</h1>


      </div>
      </div>
      
    )
  }
}
