import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementCurrentSection } from "../actions/ProgressActions";
import Intro from "./Intro";
import Main from "./Main";
import EndResults from "./EndResults";

const SECTION_ORDER = [Intro, Main, EndResults];

class CurrentSection extends Component {
  render() {
    const { section, incrementCurrentSection } = this.props;
    const SectionComponent = SECTION_ORDER[section];
    return <SectionComponent nextSection={incrementCurrentSection} />;
  }
}

const mapStateToProps = state => ({
  section: state.progress.section
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCurrentSection }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentSection);
