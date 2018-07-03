import React from "react";
import { connect } from "react-redux";
import { asyncJobs } from "../actions/actionCreators";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class StatusPage extends React.Component {
  componentDidMount() {
    this.props.asyncJobs();
  }

  render() {
    const jobList = this.props;
    console.log("joblist", jobList);
    return <div> STatus </div>;
  }
}

const mapStateToProps = state => ({
  asyncJobs: state.voices.asyncJobs
});

export default connect(
  mapStateToProps,
  { asyncJobs }
)(StatusPage);
