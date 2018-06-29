import React from 'react';
import { connect } from 'react-redux';
import { listVoices } from '../actions/actionCreators';
import { Table, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const textStyle = {
  fontSize: '40px',
  textAlign: 'center',
  color: 'lightskyblue'
}

class VoicesPage extends React.Component {

componentDidMount() {
  this.props.listVoices()
}

  render() {
    const voiceList = this.props.voices;
    const letsMap =
    voiceList.map(voice => {
      return (
        <tbody>
          <tr>
              <td>{voice.name}</td>
              <td>{voice.description}</td>
              <td>
                <Button outline color="primary">
                  <NavLink href={`/${voice.id}/new`}> Create Audio </NavLink>
                </Button>
              </td>
          </tr>
          </tbody>
        )
      });

    return (
    <div>
    <br/>
      <h2 style={textStyle}>Voices</h2>
        <Table striped>
          <thead>
            <tr>
              <th>Voice Name</th>
              <th>Description</th>
              <th>Create</th>
            </tr>
          </thead>
            {letsMap}
        </Table>
    </div>
    )
  }
}

const mapStateToProps= state => ({
  voices: state.voices.voices
});

export default connect(mapStateToProps, { listVoices })(VoicesPage);