# React Sidenav

A simple side overlay navigation for React.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-sidenav
```

# Usage

### Styles

with Sass:

```js
import "@shapla/react-sidenav/src/index.scss";
```

with CSS:

```js
import "@shapla/react-sidenav/dist/sidenav.css";
```

### Javascript Instantiation

```js
import React from "react";
import Sidenav from "@shapla/react-sidenav";

class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLeftNav: false,
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ activeLeftNav: true })}>
          Show Sidenav
        </button>

        <Sidenav
          active={this.state.activeLeftNav}
          position={"left"}
          onClose={() => this.setState({ activeLeftNav: false })}
        />
      </div>
    );
  }
}
```

### Props

| Property      | Type     | Required | Default  | Description                                          |
| ------------- | -------- | -------- | -------- | ---------------------------------------------------- |
| `active`      | Boolean  | **yes**  | `false`  | Set `true` to show sidenav                           |
| `showOverlay` | Boolean  | **no**   | `true`   | Set `false` to hide overlay                          |
| `navWidth`    | String   | **no**   | `300px`  | Navigation width                                     |
| `position`    | String   | **no**   | `left`   | Value can be one of `left`, `right`, `bottom`, `top` |
| `onClose`     | Function | **no**   | `()=>{}` | Will trigger this when user click on background.     |
