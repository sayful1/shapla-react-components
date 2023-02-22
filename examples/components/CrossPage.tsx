import React, { Component } from "react";
import { Cross } from "../../src/index";

class CrossPage extends Component {
  render() {
    return (
      <div className="stackonet-admin-app">
        <p className="mb-4">Simple delete icon</p>
        <div className="flex space-x-4">
          <Cross size="small" onClick={this.handleClick} />
          <Cross size="normal" onClick={this.handleClick} />
          <Cross size="medium" onClick={this.handleClick} />
          <Cross size="large" onClick={this.handleClick} />
        </div>
      </div>
    );
  }

  handleClick() {
    console.log("Button clicked!");
  }
}

export default CrossPage;
