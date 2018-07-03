import React from "react";
import { connect } from "react-redux";
import {
  listUtterances,
  listVoices,
  downloadUtterance
} from "../actions/actionCreators";
import { Table, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faHeadphones } from "@fortawesome/free-solid-svg-icons";

const textStyle = {
  fontSize: "40px",
  textAlign: "center",
  color: "lightskyblue"
};

class UtterancesPage extends React.Component {
  componentDidMount() {
    this.props.listUtterances();
    this.props.listVoices();
    this.props.downloadUtterance();
  }

  handleClick = e => {
    console.log(e);
    this.props.downloadUtterance(e);
  };

  render() {
    console.log(this.props);
    const utteranceList = this.props.voices.utterances;
    const letsMap = utteranceList.map(utterance => {
      return (
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon icon={faHeadphones} />
            </td>
            <td>{utterance.text}</td>
            <td>{moment.utc(utterance.created_at).format("MMMM Do YYYY")}</td>
            <td>
              <button
                type="submit"
                onClick={this.handleClick.bind(this, utterance.id)}
              >
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </td>
          </tr>
        </tbody>
      );
    });

    return (
      <div>
        <br />
        <h2 style={textStyle}>Your Utterances</h2>
        <Table striped className="utteranceTable">
          <thead>
            <tr>
              <th>Listen</th>
              <th>Text</th>
              <th>Date</th>
              <th>Download</th>
            </tr>
          </thead>
          {letsMap}
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  voices: state.voices
});

export default connect(
  mapStateToProps,
  { listUtterances, listVoices, downloadUtterance }
)(UtterancesPage);
