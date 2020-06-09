import React, { Component } from "react";
import { P, GridParent } from "../style";
import styled from "styled-components";

const Row = GridParent.extend``;

const LabelColumn = styled.div`
  grid-column: span 4;
  padding-top: 5px;
`;

const DataColumn = styled.div`
  grid-column: span 8;
  position: relative;
  padding: 5px 0;
`;

const Value = styled.div`
  width: ${props => props.width};
  background-color: ${props => props.color};
  height: 100%;
`;

const DataBar = props => {
  return (
    <Row>
      <LabelColumn>
        <P>{props.title}</P>
      </LabelColumn>
      <DataColumn>
        <Value color={props.color} width={props.width} />
      </DataColumn>
    </Row>
  );
};

export default DataBar;
