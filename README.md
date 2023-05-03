# Shapla React Components

> IMPORTANT: Shapla React Components is a work in progress and subject to major changes until 1.0 release.

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
import React, { Component } from "react";
import { Button } from "@shapla/react-components";

class MyApp extends Component {
  render() {
    return <Button theme="primary">Click Me!</Button>;
  }
}
```

# Components

- [Button](/src/components/button/README.md)
- [Chip](/src/components/chip/README.md)
- [Columns](/src/components/columns/README.md)
- [Confirm](/src/components/confirm/README.md)
- [Cross](/src/components/cross/README.md)
- [Dropdown](/src/components/dropdown/README.md)
- [Icon Container](/src/components/icon/README.md)
- [Image Container](/src/components/image/README.md)
- [Checkbox](/src/components/checkbox/README.md)
- [TextField](/src/components/input/README.md)
- [File Upload](/src/components/fileUpload/README.md)
- [Radio](/src/components/radio/README.md)
- [Radio Button](/src/components/radioButton/README.md)
- [Range Slider](/src/components/slider/README.md)
- [Search](/src/components/formSearch/README.md)
- [Select](/src/components/select/README.md)
- [Switch](/src/components/switch/README.md)
- [Modal](/src/components/modal/README.md)
- [Notifications](/src/components/notifications/README.md)
- [Progress](/src/components/progress/README.md)
- [Sidenav](/src/components/sidenav/README.md)
- [Spinner](/src/components/spinner/README.md)
- [Star Rating](/src/components/straRating/README.md)
- [Table](/src/components/table/README.md)
- [Tabs](/src/components/tabs/README.md)
- [Toggle](/src/components/toggles/README.md)
- [Dashboard](/src/components/dashboard/README.md)
