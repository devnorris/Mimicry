import React from 'react';
import { connect } from 'react-redux';
import { listVoices } from '../actions/index';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/index';


class VoicesPage extends React.Component {

componentDidMount() {
  this.props.listVoices()
}

  render() {
    console.log("voices", this.props)
    // const voiceList = this.props.voices.map(voice => {
    //   <div key={voice.id}>{voice.name}</div>
    // })
    return (
      <div>
        <ul></ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  voices: state.voices
}

function mapDispatchToProps(dispatch) {
  return {
    listVoices: bindActionCreators(listVoices, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoicesPage);