import React from "react";
import { DashboardLayout } from "../../src/index";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSideNav: false,
    };
  }

  render() {
    let menuItems = Array.from({ length: 50 }, (x, i) => i + 1);
    let sidenavMenu = menuItems.map((item) => {
      return (
        <li className="sidenav-list__item" key={item}>
          <a className="sidenav-list__link" href="#">
            Menu item {item}
          </a>
        </li>
      );
    });
    let pageContent = menuItems.map((item) => (
      <p key={item}>{item}. Dashboard Content will go here</p>
    ));

    return (
      <div className="example-dashboard-layout">
        <DashboardLayout
          title="Dashboard"
          userDisplayName="Sayful Islam"
          avatarUrl="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?s=80"
          activateSideNav={this.state.activateSideNav}
          onShowSidenav={() => this.setState({ activateSideNav: true })}
          onHideSidenav={() => this.setState({ activateSideNav: false })}
          sidenavContent={<ul className="sidenav-list">{sidenavMenu}</ul>}
          children={pageContent}
          navbarEnd={<a href="#">Log Out</a>}
        />
      </div>
    );
  }
}

export default DashboardPage;
