import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import Router from './Routes';


const Navigation = (props) =>

<Navbar color="light" light expand="md">
  <NavbarBrand href="/"><h1>Mimicry</h1></NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/voices">
            <h2><FontAwesomeIcon icon={faListUl} /> Voice List</h2>
            </NavLink>
          </NavItem>
          <br/>
          <NavItem>
            <NavLink href="/utterances">
            <h2><FontAwesomeIcon icon={faCommentDots} /> Your Utterances</h2></NavLink>
          </NavItem>
        </Nav>
</Navbar>



  class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    )
  }
}

export default App;
