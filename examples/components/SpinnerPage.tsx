import React from "react";
import { Spinner } from "../../src/index";

class SpinnerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true
    };

    setTimeout(() => {
      this.setState((state) => (state.active = false));
    }, 5000);
  }

  render() {
    return (
      <div className="stackonet-admin-app">
        <p>Shapla React Spinner</p>

        <Spinner active={this.state.active} single={true} showText={true} />
      </div>
    );
  }
}

export default SpinnerPage;
