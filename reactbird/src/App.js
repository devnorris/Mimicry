import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faCommentDots, faKiwiBird } from '@fortawesome/free-solid-svg-icons';
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
  <NavbarBrand href="/"><h2>Mimicry<FontAwesomeIcon icon={faKiwiBird} /></h2></NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/voices">
            <h3><FontAwesomeIcon icon={faListUl} /> Voice List</h3>
            </NavLink>
          </NavItem>
          <br/>
          <NavItem>
            <NavLink href="/utterances">
            <h3><FontAwesomeIcon icon={faCommentDots} /> Your Utterances</h3></NavLink>
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
