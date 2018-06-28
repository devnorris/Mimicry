import React from 'react';
import { connect } from 'react-redux';
import { createAudio } from '../actions/actionCreators';
import { Link } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateAudioPage extends React.Component {


 onSubmit = (e) => {
   e.preventDefault();
  const text = e.target[0].value;
  const id = this.props.match.params.id;
  this.props.createAudio(text, id);
  e.target[0].value = "";
}





  render() {
    console.log(this.props)
    return(
      <div className="CreateAudioPage">
        <Form className="CreateAudio" onSubmit={this.onSubmit}>
          <FormGroup className="form-group">
            <Label for="information" size="lg">Create your very own utterance here: </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="information" multiple />
            </Col>
          </FormGroup>
          <FormGroup>
              <Button type='submit'>Create</Button>
          </FormGroup>
        </Form>
          View your most recent utterances<a href='/utterances'> here</a>
        <br/>
      </div>
    )
  }
}



export default connect(null, { createAudio })(CreateAudioPage);