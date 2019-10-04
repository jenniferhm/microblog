import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

class NavBox extends Component {
  render() {
    return (
      <div className="nav-bar container">
        <Navbar bg="light" expand="lg">
          <p>The</p>
          <h2>Macroblog</h2>

          <Nav className="ml-auto" navbar>
            <NavItem><NavLink className="card-link" to="/">Blog</NavLink></NavItem>
            <NavItem><NavLink className="card-link" to="/newpost/new">Add a new post</NavLink></NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBox;