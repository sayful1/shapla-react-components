# Shapla Progress Bar

A custom progress bar featuring support for stacked bars, animated backgrounds, and text labels.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-progress
```

# Usage

### Styles

with Sass:

```js
import "@shapla/react-progress/src/index.scss";
```

with CSS:

```js
import "@shapla/react-progress/dist/progress.css";
```

### Javascript Instantiation

```js
import React from "react";
import Progress from "@shapla/react-progress";

class MyApp extends React.Component {
  render() {
    return (
      <Progress
        max={10}
        value={4}
        theme="primary"
        size="small"
        striped={true}
        animated={true}
      />
    );
  }
}
```

### Props

| Property   | Type    | Required | Default   | Description                                                          |
| ---------- | ------- | -------- | --------- | -------------------------------------------------------------------- |
| `value`    | Number  | **no**   | ``        | Current progress value                                               |
| `max`      | Number  | **no**   | `1`       | Max progress value                                                   |
| `label`    | String  | **no**   | ``        | Label text                                                           |
| `striped`  | Boolean | **no**   | `false`   | Set `true` to display stripped design                                |
| `animated` | Boolean | **no**   | `false`   | Set `true` to display stripped animation                             |
| `size`     | String  | **no**   | `default` | Progress bar height. Value can be `tiny`, `small`, `medium`, `large` |
| `theme`    | String  | **no**   | `default` | Progress bar color theme. Value can be `primary`, `secondary`        |
