# Shapla React Dropdown

A simple and interactive dropdown menu for discoverable content for React

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-dropdown
```

# Usage

### Styles

with Sass:

```js
import "@shapla/react-dropdown/src/index.scss";
```

with CSS:

```js
import "@shapla/react-dropdown/dist/dropdown.css";
```

### Javascript Instantiation

```js
import React from "react";
import Dropdown from "@shapla/react-dropdown";

class MyApp extends React.Component {
  render() {
    return (
      <Dropdown trigger={<button>From Left: Click</button>} hoverable={false}>
        <a
          href="https://example.com"
          className="shapla-dropdown-item is-link is-active"
        >
          Link 1
        </a>
        <a href="https://example.com" className="shapla-dropdown-item is-link">
          Link 2
        </a>
        <span className="shapla-dropdown-divider"></span>
        <a href="https://example.com" className="shapla-dropdown-item is-link">
          Link 3
        </a>
        <a href="https://example.com" className="shapla-dropdown-item is-link">
          Link 4
        </a>
      </Dropdown>
    );
  }
}
```

### Props

| Property    | Type    | Required | Default | Description                                                              |
| ----------- | ------- | -------- | ------- | ------------------------------------------------------------------------ |
| `hoverable` | Boolean | **no**   | `true`  | If set `true`, the dropdown will show up when hovering the trigger slot. |
| `right`     | Boolean | **no**   | `false` | Set `true` to have a right-aligned dropdown.                             |
| `role`      | String  | **no**   | `menu`  | Role of component. Mostly for accessibility.                             |
| `direction` | Boolean | **no**   | `auto`  | Value can be `auto`, `up`, `down`                                        |
