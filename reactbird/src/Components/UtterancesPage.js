import React from 'react';
import { connect } from 'react-redux';
import { listUtterances } from '../actions/actionCreators';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

class UtterancesPage extends React.Component {

componentDidMount() {
  this.props.listUtterances()
}

  render() {
    console.log(this.props)
    const utteranceList = this.props.voices.utterances;
    console.log("utterancelist", utteranceList)
    return (
      <div className='voicesPage'>
        <h2>Voices you have access too:</h2>
        <div className='utterancesList'>
        <Container>
        {utteranceList.map(utterance => {
          return (
            <Row key={utterance.id} className="navbar navbar-expand-lg navbar-light bg-light">
              <Col xs="3">{utterance.text}</Col>
              <Col xs="auto">{moment.utc(utterance.created_at).format("MMMM Do YYYY")}</Col>
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
  voices: state.voices
});


export default connect(mapStateToProps, { listUtterances })(UtterancesPage);