import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../configureStore";
import CurrentSection from "./CurrentSection";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CurrentSection />
        </div>
      </Provider>
    );
  }
}

export default App;
