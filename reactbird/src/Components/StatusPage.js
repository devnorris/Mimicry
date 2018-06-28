import React from 'react';
import { connect } from 'react-redux';
import { asyncStatus } from '../actions/actionCreators';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

class StatusPage extends React.Component {

  componentDidMount() {
    this.props.asyncStatus();
  }

  render() {
    console.log('props', this.props.asyncStatus())
    return (
      <div className='statusPage'>
        <h2>Current Status:</h2>
      </div>
      {utteranceList.map(utterance => {
        //   return (
        //     <Row key={utterance.id} className="navbar navbar-expand-lg navbar-light bg-light">
        //       <Col xs="3">{utterance.name}</Col>
        //       <Col xs="auto">{utterance.description}</Col>
        //     </Row>
        //   )
        // })}
    )
  }
}

const mapStateToProps= state => ({
  asyncStatus: state.voices.asyncStatus
});


export default connect(mapStateToProps, { asyncStatus })(StatusPage);