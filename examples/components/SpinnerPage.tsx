import React, { Component } from "react";
import { Spinner, SpinnerContainer } from "../../src/index";

class SpinnerPage extends Component<{}, { active: boolean }> {
  constructor(props) {
    super(props);

    this.showSpinner = this.showSpinner.bind(this);
  }

  componentDidMount() {
    this.showSpinner();
  }

  showSpinner() {
    Spinner.show();

    setTimeout(() => {
      Spinner.hide();
    }, 3000);
  }

  render() {
    return (
      <div className="stackonet-admin-app">
        <p>Shapla React Spinner</p>

        <button onClick={this.showSpinner}>Show spinner</button>

        <SpinnerContainer isRootSpinner={true} single={true} showText={true} />
      </div>
    );
  }
}

export default SpinnerPage;
