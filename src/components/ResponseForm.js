import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { analyzeResponse } from "../actions/IndicoActions";
import { incrementCurrentQuestion } from "../actions/QuestionsActions";
import styled from "styled-components";
import Question from "./Question";
import Button from "./Button";
import { GridParent } from "../style";
import questions from "../data/questions";

const ResponseFormContainer = styled.div`
  position: absolute;
  width: 50%;
  min-width: 480px;
  height: 220px;
  bottom: 20px;
  left: 20px;
  padding: 25px;
  background-color: #fff;
  border-radius: 30px;
  opacity: 0.15;
  &:hover {
    opacity: 0.9;
  }
  transition: opacity 0.5s;
`;

const Subcontainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  font-family: "Roboto Mono";
  font-weight: 400;
  font-size: 16px;
  color: #808080;
  width: 100%;
  resize: none;
  border: none;
  height: 100px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }

  @media (max-width: 1190px) {
    height: 80px;
  }
`;

const buttonStyle = {
  position: "absolute",
  bottom: 40
};

class ResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    document.getElementById("text-area").focus();
  }

  handleType(event) {
    const value = event.target.value;
    this.setState({ text: value.substring(3, value.length) });
  }

  handleSubmit() {
    const { text } = this.state;
    const {
      analyzeResponse,
      incrementCurrentQuestion,
      currentQuestion,
      nextSection
    } = this.props;
    if (currentQuestion === questions.length - 1) {
      nextSection();
    }
    analyzeResponse(text);
    this.setState({ text: "" });
    incrementCurrentQuestion();
  }

  render() {
    const { text, results, currentQuestion } = this.state;
    return (
      <ResponseFormContainer>
        <Subcontainer>
          <Question />
          <TextArea
            value={`A: ${text}`}
            onChange={e => this.handleType(e)}
            id="text-area"
          />
          <br />
          <Button
            right
            style={buttonStyle}
            disabled={!text.trim()}
            onClick={() => this.handleSubmit()}
          >
            Submit
          </Button>
        </Subcontainer>
      </ResponseFormContainer>
    );
  }
}

const mapStateToProps = state => ({
  currentQuestion: state.questions.currentQuestion
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ analyzeResponse, incrementCurrentQuestion }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResponseForm);
