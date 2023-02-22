# React Modal

A classic modal overlay for React, in which you can include any content you want.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-modal
```

# Usage

### Styles

with Sass:

```js
import "@shapla/react-modal/src/index.scss";
```

with CSS:

```js
import "@shapla/react-modal/dist/modal.css";
```

### Javascript Instantiation

```js
import React from "react";
import Modal from "@shapla/react-modal";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showBoxModal: false };
    this.openBoxModal = this.openBoxModal.bind(this);
    this.closeBoxModal = this.closeBoxModal.bind(this);
  }

  openBoxModal() {
    this.setState((state) => (state.showBoxModal = true));
  }

  closeBoxModal() {
    this.setState((state) => (state.showBoxModal = false));
  }

  render() {
    return (
      <div>
        <button onClick={this.openBoxModal}>Open Box Modal</button>

        <Modal
          active={this.state.showBoxModal}
          type="box"
          onClose={this.closeBoxModal}
        >
          Box modal only have white background, border radius and 1rem padding
        </Modal>
      </div>
    );
  }
}
```

### Props

| Property                 | Type    | Required | Default    | Description                                                                                                                                                                                   |
| ------------------------ | ------- | -------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                 | Boolean | **yes**  |            |                                                                                                                                                                                               |
| `title`                  | String  | **no**   | `Untitled` | `title` will not show if you set `type` other than `card`                                                                                                                                     |
| `type`                   | String  | **no**   | `card`     | Currently `card` and `box` design available. Use any name to get blank modal                                                                                                                  |
| `closeOnBackgroundClick` | Boolean | **no**   | `true`     | If set `true`, clicking outside content area will trigger close event.                                                                                                                        |
| `showCloseIcon`          | Boolean | **no**   | `true`     | If set `false`, no closing icon will be shown                                                                                                                                                 |
| `contentSize`            | String  | **no**   | `medium`   | Value can be `small`, `medium`, `large` or `full`. `small` has content width 320px, `medium` has content width 640px, `large` has content width 960px and `full` will take full browser width |
| `className`              | String  | **no**   | ``         | Custom CSS class                                                                                                                                                                              |
| `children`               | String  | **no**   | ``         | Modal content                                                                                                                                                                                 |
| `footer`                 | String  | **no**   | ``         | Modal footer content when using card design.                                                                                                                                                  |
