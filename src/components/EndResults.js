import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Illustration from "./Illustration";
import ResultsModal from "./ResultsModal";
import { reset } from "../actions/ProgressActions";
import Button from "./Button";
import styled from "styled-components";

const ButtonSection = styled.div`
  position: absolute;
  bottom: 70px;
  right: 20px;
  width: 150px;
`;

class EndResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: -1
    };
  }

  onClickIllustration = sectionIndex => {
    this.setState({ activeSection: sectionIndex });
  };

  onClose = () => {
    this.setState({ activeSection: -1 });
  };

  render() {
    const { results, reset } = this.props;
    const { activeSection } = this.state;
    return (
      <div>
        <Illustration showHover onClickObject={this.onClickIllustration} />
        {activeSection > -1 && (
          <ResultsModal
            results={results[activeSection]}
            onClose={this.onClose}
          />
        )}
        <ButtonSection>
          <Button onClick={reset}>Start Over</Button>
        </ButtonSection>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.indico.results
});

const mapDispatchToProps = dispatch => bindActionCreators({ reset }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EndResults);
