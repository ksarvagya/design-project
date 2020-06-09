import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import questions from "../data/questions";
import { P } from "../style";

const Question = props => {
  const currentQuestion = questions[props.currentQuestion];
  return <P>Q: {currentQuestion}</P>;
};

const mapStateToProps = state => ({
  currentQuestion: state.questions.currentQuestion
});

export default connect(mapStateToProps)(Question);
