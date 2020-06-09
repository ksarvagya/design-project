import React, { Component } from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  display: block;
  text-transform: uppercase;
  font-family: "Roboto Mono";
  font-size: 16px;
  color: ${props => (props.disabled ? "#eeeeee" : "#808080")};
  background-color: #fff;
  padding: 8px 20px;
  border: 2px solid;
  border-color: ${props => (props.disabled ? "#eeeeee" : "#808080")};
  position: relative;
  cursor: ${props => (props.disabled ? "auto" : "pointer")};

  &::before {
    position: absolute;
    top: ${props => (props.disabled ? 0 : "6px")};
    left: ${props => (props.disabled ? 0 : "6px")};
    z-index: -1;
    display: block;
    background-color: #fff;
    border: 2px solid;
    border-color: ${props => (props.disabled ? "#eeeeee" : "#808080")};
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    content: "";
    transition: all 0.2s;
  }

  &:focus {
    outline: none;
  }
`;

const Parent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

const HoverDetector = styled.div`
  padding-right: 4px;
  padding-bottom: 4px;
  position: absolute;
  cursor: ${props => (props.disabled ? "auto" : "pointer")};
  left: ${props => (props.center ? "50%" : "auto")};
  right: ${props => (props.right ? 0 : "auto")};
  transform: ${props => (props.center ? "translate(-50%)" : "none")};
  &:hover {
    button::before {
      top: 0;
      left: 0;
    }
  }
`;

const Button = props => {
  const { center, right, style, onClick, children, disabled } = props;
  return (
    <Parent style={style}>
      <HoverDetector center={center} right={right} disabled={disabled}>
        <ButtonElement
          disabled={disabled}
          onClick={e => {
            e.preventDefault();
            onClick();
          }}
        >
          {children}
        </ButtonElement>
      </HoverDetector>
    </Parent>
  );
};

export default Button;
