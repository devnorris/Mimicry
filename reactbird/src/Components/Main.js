import React from 'react';
import { Jumbotron, NavLink, Button } from 'reactstrap';


class MainPage extends React.Component {


  render() {

    return (
      <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to Mimicry</h1>
        <p className="lead">Mimicry is a Lyrebird application that brings the power and intelligence of voice cloning into your home.</p>
        <hr className="my-2" />
        <p>Mimicry gives you the chance to take a digital voice from one of the cloned voices provided and generate text, enabling you to create custom utterances</p>
        <p className="lead">
          <NavLink href='/voices'>
            <Button color="primary">Try It Out</Button>
          </NavLink>
        </p>
      </Jumbotron>
    </div>
    )
  }
}

export default MainPage;