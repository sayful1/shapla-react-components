# React Sidenav

A simple dashboard layout to build your app dashboard for React.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-dashboard-layout
```

# Usage

### Styles

with Sass:

```js
import "@shapla/react-dashboard-layout/src/index.scss";
```

with CSS:

```js
import "@shapla/react-dashboard-layout/dist/dashboard-layout.css";
```

### Javascript Instantiation

```js
import React from "react";
import DashboardLayout from "@shapla/react-dashboard-layout";

class MyApp extends React.Component {
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
          sidenavMenu={<ul className="sidenav-list">{sidenavMenu}</ul>}
          children={pageContent}
          navbarEnd={<a href="#">Log Out</a>}
        />
      </div>
    );
  }
}
```

### Props

| Property          | Type    | Required | Default   | Description                                                          |
| ----------------- | ------- | -------- | --------- | -------------------------------------------------------------------- |
| `title`           | String  | **no**   | ``        | Dashboard title                                                      |
| `userDisplayName` | String  | **no**   | ``        | User display name                                                    |
| `avatarUrl`       | String  | **no**   | ``        | User avatar url                                                      |
| `greeting`        | String  | **no**   | `Hello,`  | Greeting text                                                        |
| `headerHeight`    | String  | **no**   | `56px`    | Height of header                                                     |
| `headerTheme`     | String  | **no**   | `primary` | Value can be `default` or `primary` or `secondary`                   |
| `activateSideNav` | Boolean | **no**   | `false`   | Boolean value hide/show sidenav                                      |
| `navWidth`        | String  | **no**   | `300px`   | Width of side navigation                                             |
| `sideNavType`     | String  | **no**   | `overlay` | Value can be `overlay` or `off-canvas`. `off-canvas` is experimental |
| `showOverlay`     | Boolean | **no**   | `true`    | Should show overlay color when side navigation active.               |
| `sidenavContent`  | String  | **no**   | ``        | Side navigation content.                                             |
| `navbarBrand`     | String  | **no**   | ``        | Navbar brand content.                                                |
| `navbarStart`     | String  | **no**   | ``        | Content after `navbarBrand`                                          |
| `navbarEnd`       | String  | **no**   | ``        | Content at right side                                                |
| `onShowSidenav`   | Func    | **no**   | ``        | Function run when click to open sidebar.                             |
| `onHideSidenav`   | Func    | **no**   | ``        | Function run when click to hide sidebar.                             |
