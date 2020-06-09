import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { GridParent } from "../style";
import Illustration from "./Illustration";
import emptyResults from "../data/emptyResults";

const ResultsContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

class Results extends Component {
  render() {
    const { results } = this.props;
    const currentResults =
      results.length > 0 ? results[results.length - 1] : emptyResults;
    return (
      <ResultsContainer>
        <Illustration />
      </ResultsContainer>
    );
  }
}

const mapStateToProps = state => ({
  results: state.indico.results
});

export default connect(mapStateToProps)(Results);
