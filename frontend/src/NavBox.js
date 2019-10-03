import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

class NavBox extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <NavLink to="/"><h2>Microblog</h2></NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem><NavLink to="/">Blog</NavLink></NavItem>
          <NavItem><NavLink to="/newpost/new">Add a new post</NavLink></NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBox;