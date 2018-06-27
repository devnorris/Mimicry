import React from 'react';
import { connect } from 'react-redux';
import { listVoices } from '../actions/actionCreators';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

class VoicesPage extends React.Component {

componentDidMount() {
  this.props.listVoices()
}

  render() {
    const voiceList = this.props.voices;
    return (
      <div className='voicesPage'>
        <h2>Voices you have access too:</h2>
        <div className='voiceList'>
          <Container>
            {voiceList.map(voice => {
              return (
                <Row key={voice.id} className="navbar navbar-expand-lg navbar-light bg-light">
                  <Col xs="3">{voice.name}</Col>
                  <Col xs="auto">{voice.description}</Col>
                  <Col xs="3">
                    <button>
                      <Link to={`/${voice.id}/new`}> Create Audio </Link>
                    </button>
                  </Col>
                </Row>
              )
            })}
          </Container>
        </div>
      </div>
    )
  }

}

const mapStateToProps= state => ({
  voices: state.voices.voices
});

// function mapDispatchToProps(dispatch) {
//   return {
//     listVoices: bindActionCreators(listVoices, dispatch)
//   }
// }

export default connect(mapStateToProps, { listVoices })(VoicesPage);