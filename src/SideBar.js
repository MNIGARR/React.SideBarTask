



import React, { Component } from "react";
// import {ListGroup, ListGroupItem} from "reactstrap";
import {NavItem, Nav, NavLink} from "reactstrap";



export default class SideBar extends Component {
  render() {
    return (
      <div className="SideBar" style={{backgroundColor: "#5f71cc", color: "white", width: "340px"}}>
        <h3 className="head">Bootstrap SideBar</h3>

        <Nav vertical className="sideNav"> 
  <NavItem styel={{height: "70px"}} className="sideNavHeading">
    <NavLink style={{color: "white"}} href="#">
      {this.props.heading}

    </NavLink>
  </NavItem><NavItem className="sideNavItem">
    <NavLink style={{color: "white"}} href="#">

    Home
    </NavLink>
  </NavItem>
  <NavItem className="sideNavItem">
    <NavLink style={{color: "white"}} href="#" >
      Link
    </NavLink>
  </NavItem>
  <NavItem className="sideNavItem">
    <NavLink style={{color: "white"}} href="#">
      About
    </NavLink>
  </NavItem>
  <NavItem className="sideNavItem"> 
    <NavLink style={{color: "white"}} href="#">
      Pages
    </NavLink>
  </NavItem>
  <NavItem className="sideNavItem">
    <NavLink style={{color: "white"}} href="#">
      Portfolio
    </NavLink>
  </NavItem>
  <NavItem className="sideNavItem"> 
    <NavLink style={{color: "white"}} href="#">
      FAQ
    </NavLink>
  </NavItem>
  <NavItem className="sideNavItem">
    <NavLink style={{color: "white"}} href="#">
      Contact
    </NavLink>
  </NavItem>
</Nav>
      </div>
    );
  }


  n
}

