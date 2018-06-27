import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAudio } from '../actions/actionCreators';
import { Container, Row, Col, Form } from 'reactstrap';
import { Link } from 'react-router-dom'

class CreateAudioPage extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this)
  }


onSubmit(e) {
  console.log("e.target", e.target)
  const text = e.target.value;
  const voiceId = this.props.match.params.id;
  console.log("voice", voiceId)
  this.props.createAudio(text, voiceId);
}


  render() {
    console.log("props", this.props);
    return(
      <div className="CreateAudioPage">
      <h2></h2>
        <p>Add text and on submit, watch the magic happen</p>
        <Form className="CreateAudio" onSubmit={this.onSubmit}>
          <div className="form">
            <textarea name="textarea" ></textarea>
          </div>
          <button type='Submit' value='Send'>Submit</button>
        </Form>
      </div>
    )
  }
}

CreateAudioPage.propTypes = {
  createAudio: PropTypes.func.isRequired
}


export default connect(null, { createAudio })(CreateAudioPage);