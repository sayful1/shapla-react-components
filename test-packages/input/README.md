# Shapla React Checkbox

A custom checkbox for React that exactly work same way as native checkbox

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-checkbox
```

# Usage

### Styles

with Sass:

```js
import '@shapla/react-checkbox/src/index.scss';
```

with CSS:

```js
import '@shapla/react-checkbox/dist/button.css';
```

### Javascript Instantiation

```js
import React from 'react';
import Checkbox from '@shapla/react-checkbox';

class MyApp extends React.Component {
  render() {
    return (
      <Checkbox name="_acceptance" value='yes' label="You must accept our terms and conditions." checked={true}/>
    );
  }
}
```

### Props

| Property      | Type      | Required  | Default     | Description
|---------------|-----------|-----------|-------------|-----------------------------------------------------------
| `label`       | String    | **no**    | ``          | Checkbox label
| `value`       | String    | **no**    | `on`        | The default value for the checkbox
| `disabled`    | Boolean   | **no**    | `false`     | If set `true`, Checkbox will be disabled to check.
| `checked`     | Boolean   | **no**    | `false`     | If set `true`, Checkbox will be checked.
