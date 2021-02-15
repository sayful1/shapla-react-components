# Shapla React Data Table

A simple responsive data table component for React

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-table
```

# Usage

### Styles

with Sass:

```js
import '@shapla/react-table/src/index.scss';
```

with CSS:

```js
import '@shapla/react-table/dist/table.css';
```

### Javascript Instantiation

```js
import React from 'react';
import Table from '@shapla/react-table';

class MyApp extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}
```

### Props

| Property        | Type    | Required | Default            | Description                                                             |
|-----------------|---------|----------|--------------------|-------------------------------------------------------------------------|
| `columns`       | Array   | **yes**  | `null`             | Pass an **Array** of **Objects**. See _columns data object_             |
| `items`         | Array   | **yes**  | `null`             | Pass an **Array** of **Objects** with key:value format.                 |
| `selectedItems` | Array   | no       | `[]`               | Pass an **Array** of object id                                          |
| `actions`       | Array   | no       | `[]`               | If you want to show row actions, pass an **Array** of **Objects**       |
| `index`         | String  | no       | `id`               | The index identifier of the row                                         |
| `selectAllText` | String  | no       | `Select All`       | Shows if no items are found                                             |
| `notFoundText`  | String  | no       | `No items found.`  | Shows if no items are found                                             |
| `sortBy`        | String  | no       | `null`             | The property in data on which to initially sort.                        |
| `sortOrder`     | String  | no       | `asc`              | The initial sort order.                                                 |
| `showCb`        | Boolean | no       | `true`             | Whether to show the bulk checkbox in each rows                          |
| `mobileWidth`   | Number  | no       | `768`              | Mobile breakpoint for table.                                            |
| `onSelectItem`  | Func    | no       | ``                 | Return `selectedItems` as parameter
| `onClickAction` | Func    | no       | ``                 | Return `action` as first parameter and `item` as second parameter
| `onClickSort`   | Func    | no       | ``                 | Return `column key` as first parameter and `sort order` as second parameter


### columns data object

| Property      | Type      | Required  | Default   | Description                                                             |
|---------------|-----------|-----------|-----------|-------------------------------------------------------------------------|
| `key`         | String    | **yes**   | ``        | Column key.                                                             |
| `label`       | String    | **yes**   | ``        | Column label                                                            |
| `numeric`     | Boolean   | no        | `false`   | Set `true` if table column data type is numeric.                        |
| `sortable`    | Boolean   | no        | `false`   | Whether the column data can be sorted by `asc` or `desc` order.         |


### actions data object

| Property      | Type      | Required  | Default   | Description   |
|---------------|-----------|-----------|-----------|---------------|
| `key`         | String    | **yes**   | ``        | Action key    |
| `label`       | String    | **yes**   | ``        | Action label  |
