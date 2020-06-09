import React, { Component } from "react";
import Illustration from "./Illustration";
import ResponseForm from "./ResponseForm";

class Main extends Component {
  render() {
    const { nextSection } = this.props;
    return (
      <div>
        <Illustration />
        <ResponseForm nextSection={nextSection} />
      </div>
    );
  }
}

export default Main;
