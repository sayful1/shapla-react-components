import React, { Component } from "react";
import { Button } from "../../src/index";

class ButtonPage extends Component {
  render() {
    return (
      <div className="stackonet-admin-app space-x-4">
        <div className="mb-8">
          <h2 className="subtitle">Color/Theme</h2>
          <div className="space-x-4">
            <Button theme="default" onClick={this.handleClick}>
              Default
            </Button>
            <Button theme="primary" onClick={this.handleClick}>
              Primary
            </Button>
            <Button theme="secondary" onClick={this.handleClick}>
              Secondary
            </Button>
            <Button theme="success" onClick={this.handleClick}>
              Success
            </Button>
            <Button theme="warning" onClick={this.handleClick}>
              Warning
            </Button>
            <Button theme="error" onClick={this.handleClick}>
              Error
            </Button>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="subtitle">Size</h2>
          <div className="space-x-4">
            <Button theme="primary" size="small" onClick={this.handleClick}>
              Small
            </Button>
            <Button theme="primary" onClick={this.handleClick}>
              Default
            </Button>
            <Button theme="primary" size="medium" onClick={this.handleClick}>
              Medium
            </Button>
            <Button theme="primary" size="large" onClick={this.handleClick}>
              Large
            </Button>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="subtitle">Loading</h2>
          <div className="space-x-4">
            <Button theme="primary" loading={true}>
              Default
            </Button>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="subtitle">Floating Action Button</h2>
          <div className="space-x-4">
            <Button theme="primary" fab={true}>
              +
            </Button>
            <Button theme="primary" fab={true} size="medium">
              +
            </Button>
            <Button theme="primary" fab={true} size="large">
              +
            </Button>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="subtitle">Custom class handle</h2>
          <div className="space-x-4">
            <Button theme="primary" className={"has-custom-class"}>
              has-custom-class
            </Button>
          </div>
        </div>
      </div>
    );
  }

  handleClick() {
    console.log("Button clicked!");
  }
}

export default ButtonPage;
