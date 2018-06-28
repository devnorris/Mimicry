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


  // <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //     <button><NavLink to='/'>Dashboard</NavLink></button>
  //     <button><NavLink to='/voices'>Voice List</NavLink></button>
  //     <button><NavLink to='/utterances'>Your Utterances</NavLink></button>
  //   </div>
  // </nav>

  // <div className='voicesPage'>
  //       <h2>Voices you have access too:</h2>
  //       <div className='voiceList'>
  //         <Container>
  //           {voiceList.map(voice => {
  //             return (
  //               <Row key={voice.id} className="navbar navbar-expand-lg navbar-light bg-light">
  //                 <Col xs="3">{voice.name}</Col>
  //                 <Col xs="auto">{voice.description}</Col>
  //                 <Col xs="auto">
  //                   <button>
  //                     <Link to={`/${voice.id}/new`}> Create Audio </Link>
  //                   </button>
  //                 </Col>
  //               </Row>
  //             )
  //           })}
  //         </Container>
  //       </div>
  //     </div>

//   return (
//     <div className='voicesPage'>
//       <h2>Voices you have access too:</h2>
//       <div className='utterancesList'>
//       <Container>
//       {utteranceList.map(utterance => {
//         return (
//           <Row key={utterance.id} className="navbar navbar-expand-lg navbar-light bg-light">
//             <Col xs="3">{utterance.text}</Col>
//             <Col xs="auto">{moment.utc(utterance.created_at).format("MMMM Do YYYY")}</Col>
//             <Col xs="3">
//               <div className="downloadIcon">
//                 <button type='submit' onClick={this.handleClick.bind(this, utterance.id)}>
//                   <FontAwesomeIcon icon={faDownload} />
//                 </button>
//               </div>
//             </Col>
//           </Row>
//         )
//       })}
//       </Container>
//       </div>
//     </div>
//   )
// }