# Shapla React Components

A collection of reusable React components for rapid development.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

# Installation

Install using npm package manager

```shell
npm i @shapla/react-components
```

or using yarn package manager

```shell
yarn add @shapla/react-components
```

# Usage

Here we export all components script as ES module and all style as SCSS mixins. So you need to import SCSS mixin to
load style of component and also need to import ES module and use as react component.

### Styles (SCSS)

```scss
// Add the following line at top of your scss file
@use "@shapla/react-components/src/index.scss" as shapla;

@include shapla.button;
@include shapla.progress;
// Include other mixins as your requirement
```

### Javascript Instantiation
```js
import React, {Component} from "react";
import { Button } from "@shapla/react-components";

class MyApp extends Component {
  render() {
    return <Button theme="primary">Click Me!</Button>;
  }
}
```

# Components

* [Button](/src/components/button/README.md)
* [Checkbox](/src/components/checkbox/README.md)
* [Chip](/src/components/chip/README.md)
* [Columns](/src/components/columns/README.md)
* [Confirm](/src/components/confirm/README.md)
* [Cross](/src/components/cross/README.md)
* [Dashboard](/src/components/dashboard/README.md)
* [Dropdown](/src/components/dropdown/README.md)
* [Modal](/src/components/modal/README.md)
* [Notifications](/src/components/notifications/README.md)
* [Progress](/src/components/progress/README.md)
* [Sidenav](/src/components/sidenav/README.md)
* [Spinner](/src/components/spinner/README.md)
