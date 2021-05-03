# Shapla React Tabs

A simple responsive horizontal navigation tabs component based on Bulma Tabs for React

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-tabs
```

# Usage

### Styles

with Sass:

```js
import '@shapla/react-tabs/src/index.scss';
```

with CSS:

```js
import '@shapla/react-tabs/dist/tabs.css';
```

### Javascript Instantiation

```js
import React from 'react';
import {Tabs, Tab} from '@shapla/react-tabs';

class MyApp extends React.Component {
  render() {
    return (
      <Tabs>
        <Tab label="Tab 1">Content 1</Tab>
        <Tab label="Tab 2">Content 2</Tab>
      </Tabs>
    );
  }
}
```

### Props for `Tabs`
| Property          | Type     | Required  | Default    | Description
|-------------------|----------|-----------|------------|----------------------------------------------------------------
| `alignment`       | String   | **no**    | `center`   | Possible value can be `left`, `center` or `right`.
| `size`            | String   | **no**    | `default`  | Possible value can be `default`, `small`, `medium` or `large`.
| `tabStyle`        | String   | **no**    | `default`  | Possible value can be `default`, `boxed`, `rounded` or `toggle`.
| `fullwidth`       | Boolean  | **no**    | `false`    | If set `true`, the tabs will take up available full width.
| `activeTabIndex`  | Number   | **no**    | `0`        | Set active tab index number, 0 (zero) based index


### Props for `Tab`
| Property      | Type      | Required  | Default   | Description
|---------------|-----------|-----------|-----------|----------------
| `label`       | String    | **yes**   | `true`    | Tab title
| `children`    | String    | **yes**   | ``        | Tab content

