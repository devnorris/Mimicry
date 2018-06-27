import React from 'react';
import { connect } from 'react-redux';
import { createAudio } from '../actions/actionCreators';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

class CreateAudioPage extends React.Component {

componentDidMount() {
  this.props.createAudio()
}

// onSubmit(e) {
//   const input = e.
// }


  render() {
    return(
      <div>
        <h3>Add text and on submit, watch the magic happen</h3>
        <form className="CreateAudio" onSubmit={this.onSubmit}>
          <div className="form">
            <textarea name="textarea" ></textarea>
          </div>
          <button type='Submit'>Submit</button>
        </form>
      </div>
    )
  }
}


export default connect(null, { createAudio })(CreateAudioPage);