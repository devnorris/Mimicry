import React from 'react';
import { connect } from 'react-redux';
import { createAudio } from '../actions/actionCreators';

class CreateAudioPage extends React.Component {


 onSubmit = (e) => {
   e.preventDefault();
  const text = e.target[0].value;
  const id = this.props.match.params.id;
  this.props.createAudio(text, id);
}


  render() {
    return(
      <div className="CreateAudioPage">
        <p>Add text and on submit, watch the magic happen</p>
        <form className="CreateAudio" onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea name="textarea"></textarea>
          </div>
          <button type='submit'>Create</button>
        </form>
      </div>
    )
  }
}

// CreateAudioPage.propTypes = {
//   createAudio: PropTypes.func.isRequired
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     createAudio: bindActionCreators(createAudio, dispatch)
//   }
// }


export default connect(null, { createAudio })(CreateAudioPage);