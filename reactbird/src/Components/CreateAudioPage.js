import React from 'react';
import { connect } from 'react-redux';
import { createAudio, asyncJobs } from '../actions/actionCreators';
import { Link } from 'react-router-dom';

class CreateAudioPage extends React.Component {

  componentDidMount() {
    this.props.asyncJobs();
  }


 onSubmit = (e) => {
   e.preventDefault();
  const text = e.target[0].value;
  const id = this.props.match.params.id;
  this.props.createAudio(text, id);
  // this.props.asyncJobs(this.props.audio.data);
  e.target[0].value = "";
}



  render() {
    console.log(this.props)
    return(
      <div className="CreateAudioPage">
        <p>Add text and on submit, watch the magic happen</p>
        <form className="CreateAudio" onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea name="textarea"></textarea>
          </div>
          <button type='submit'>Create</button>
        </form>
        <br/>
      </div>
    )
  }
}

const mapStateToProps= state => ({
  audio: state.voices.audio,
  asyncJobs: state.voices.asyncJobs
});


export default connect(mapStateToProps, { createAudio, asyncJobs })(CreateAudioPage);