import React, { Component } from "react";
import DataBar from "./DataBar";
import { P } from "../style";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Modal = styled.div`
  width: 60%;
  margin: 0 auto;
  max-height: 500px;
  margin-top: 150px;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 40px;
  overflow: scroll;
`;

const Response = P.extend`
  margin-bottom: 30px;
`;

class ResultsModal extends Component {
  decimalToWidth(decimal) {
    return `${Math.ceil(decimal * 100)}%`;
  }

  render() {
    const { results, onClose } = this.props;
    const { emotion, topics } = results.data;
    console.log(results);
    return (
      <ModalBackdrop onClick={onClose}>
        <Modal>
          <Response>"{results.response}"</Response>
          <DataBar
            title="Joy"
            color="#e6e64c"
            width={this.decimalToWidth(emotion.joy)}
          />
          <DataBar
            title="Sadness"
            color="#4cb2e6"
            width={this.decimalToWidth(emotion.sadness)}
          />
          <DataBar
            title="Anger"
            color="#d53434"
            width={this.decimalToWidth(emotion.anger)}
          />
          <DataBar
            title="Love"
            color="#eb52eb"
            width={this.decimalToWidth(
              Math.min(100, topics.relationships + topics.romance)
            )}
          />
          <DataBar
            title="Sentiment"
            color="#969696"
            width={this.decimalToWidth(results.data.sentiment)}
          />
        </Modal>
      </ModalBackdrop>
    );
  }
}

export default ResultsModal;
