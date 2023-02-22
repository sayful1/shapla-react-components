import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { DashboardLayout } from "../src";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSidenav: false
    };
  }

  render() {
    const sidenavContent = (
      <div>
        <Link to={`button`}>Button</Link>
        <Link to={`checkbox`}>Checkbox</Link>
        <Link to={`notification`}>Notification</Link>
      </div>
    );
    return (
      <div className="App">
        <DashboardLayout
          class="shapla-react-components-demo"
          title="Shapla React Components"
          onShowSidenav={() => this.setState({ activeSidenav: true })}
          onHideSidenav={() => this.setState({ activeSidenav: false })}
          activateSideNav={this.state.activeSidenav}
          sidenavContent={sidenavContent}
        >
          {<Outlet />}
        </DashboardLayout>
      </div>
    );
  }
}

export default App;
