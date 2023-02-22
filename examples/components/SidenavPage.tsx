import React from "react";
import Sidenav from "../src/index";
import "../src/index.scss";

class SidenavPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTopNav: false,
      activeRightNav: false,
      activeBottomNav: false,
      activeLeftNav: false,
    };
  }

  render() {
    return (
      <div className="flex space-x-4">
        <button
          className="shapla-button"
          onClick={() => this.setState({ activeLeftNav: true })}
        >
          Left
        </button>
        <button
          className="shapla-button"
          onClick={() => this.setState({ activeRightNav: true })}
        >
          Right
        </button>
        <button
          className="shapla-button"
          onClick={() => this.setState({ activeBottomNav: true })}
        >
          Bottom
        </button>
        <button
          className="shapla-button"
          onClick={() => this.setState({ activeTopNav: true })}
        >
          Top
        </button>

        <Sidenav
          active={this.state.activeTopNav}
          position={"top"}
          onClose={() => this.setState({ activeTopNav: false })}
        />
        <Sidenav
          active={this.state.activeRightNav}
          position={"right"}
          onClose={() => this.setState({ activeRightNav: false })}
        />
        <Sidenav
          active={this.state.activeBottomNav}
          position={"bottom"}
          onClose={() => this.setState({ activeBottomNav: false })}
        />
        <Sidenav
          active={this.state.activeLeftNav}
          position={"left"}
          onClose={() => this.setState({ activeLeftNav: false })}
        />
      </div>
    );
  }
}

export default SidenavPage;
