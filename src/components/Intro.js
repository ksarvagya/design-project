import React, { Component } from "react";
import { P, H1, H3 } from "../style";
import Button from "./Button";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fbf6ff;
`;

const Container = styled.div`
  width: 80%;
  max-width: 530px;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 190px;
  padding-top: 15px;
  border-bottom: 2px solid #808080;
  margin: 0 auto;
`;

const Main = styled.div`
  margin-top: 250px;
`;

const buttonStyle = {
  marginTop: 30
};

class Intro extends Component {
  render() {
    const { nextSection } = this.props;
    return (
      <Background>
        <Container>
          <Header>
            <H1>Environment Builder</H1>
          </Header>
          <Main>
            <H3>What to Know:</H3>
            <P>
              1. You will be asked a series of prompts; answer them as
              truthfully and descriptively as you feel comfortable
            </P>
            <P>
              2. Once you answer a prompt and hit the 'next' button there's no
              goin' back
            </P>
            <Button center style={buttonStyle} onClick={nextSection}>
              Get Started
            </Button>
          </Main>
        </Container>
      </Background>
    );
  }
}

export default Intro;
