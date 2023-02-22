import React, { Component } from "react";
import { Button } from "../../src/index";
import "../src/index.scss";

class ButtonPage extends Component {
  render() {
    return (
      <div className="stackonet-admin-app">
        <p>First Testing page using React.</p>

        <Button theme="primary" onClick={this.handleClick}>
          Click Me
        </Button>
      </div>
    );
  }

  handleClick() {
    console.log("Button clicked!");
  }
}

export default ButtonPage;
