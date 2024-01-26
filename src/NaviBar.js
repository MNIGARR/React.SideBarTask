import React, { Component } from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Navi extends Component {
   
  render() {
    return (
     <div style={{marginLeft: "100px"}} className='navBar'>
        <Nav
>
  <NavItem >
    <NavLink style={{color: "darkgray"}} href="#"
    >
      page1
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink style={{color: "darkgray"}} href="#">
      page2 
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink style={{color: "darkgray"}} href="#">
      page3
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink style={{color: "darkgray"}} href="#">
      page4
    </NavLink>
  </NavItem>
</Nav>
     </div>
    )
  }
}