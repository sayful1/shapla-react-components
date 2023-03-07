import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { Cross, DashboardLayout } from "../src";
import { routerLinks } from "./router";

class App extends Component<
  {},
  {
    activeSidenav: boolean;
    showIncompleteNotice: boolean;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      activeSidenav: false,
      showIncompleteNotice: true,
    };
  }

  render() {
    const sidenavContent = (
      <div className="sidenav-list">
        {routerLinks.map((link) => (
          <div key={link.path} className="sidenav-list__item">
            <Link className="sidenav-list__link" to={link.path}>
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    );
    return (
      <div className="App">
        <DashboardLayout
          className="shapla-react-components-demo"
          title="Shapla React Components"
          onShowSidenav={() => this.setState({ activeSidenav: true })}
          onHideSidenav={() => this.setState({ activeSidenav: false })}
          activateSideNav={this.state.activeSidenav}
          sidenavContent={sidenavContent}
        >
          {this.state.showIncompleteNotice && (
            <div className="note--incomplete-info">
              <Cross
                size="medium"
                className="note--incomplete-info__cross"
                onClick={() => this.setState({ showIncompleteNotice: false })}
              />
              This document is still under development.
            </div>
          )}
          {<Outlet />}
        </DashboardLayout>
      </div>
    );
  }
}

export default App;
